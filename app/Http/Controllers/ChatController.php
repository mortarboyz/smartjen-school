<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Chat;
use App\Models\User;
use Error;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    /**
     * Get Chat Data Based on Param Id (Receiver ID)
     */
    public function fetchChats(Request $request, $receiverId)
    {
        try {

            $chats = Chat::whereIn('senderId', [$request->user()->id, $receiverId])->whereIn('receiverId', [$request->user()->id, $receiverId])->orderByDesc('created_at')->get();
            return response()->json([
                'success' => true,
                'message' => 'Fetch chat success.',
                'data'    => $chats
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to fetch chat.',
            ], 409);
        }
    }

    /**
     * Send chat to receiverId
     * Limit by SchoolID, so only people with the same school id can message each other.
     * and Teacher can only send message to student, vice versa.
     */
    public function sendChat(Request $request, $receiverId)
    {
        try {
            /**
             * Validate some condition.
             */
            $target = User::find($receiverId);
            if (($target->schoolId != $request->user()->schoolId) || ($request->user()->roleId == $target->roleId)) {
                throw new Error(false);
            }

            /**
             * Send chat if all condition above is false.
             */
            $chat = Chat::create([
                'senderId' => $request->user()->id,
                'receiverId' => $receiverId,
                'message' => $request->input('message')
            ]);

            broadcast(new MessageSent($chat))->toOthers();

            return response()->json([
                'success' => true,
                'message' => 'Chat sent.',
                'data'    => $chat
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to send chat.',
            ], 409);
        }
    }
}
