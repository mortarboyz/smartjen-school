<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class LoginController extends Controller
{
    public function authenticate(Request $request)
    {
        $check = (!$request->schoolId)? Admin::where('email', $request->email)->first() : User::where('email', $request->email)->first();

        if (!$check || !Hash::check($request->password, $check->password)) {
            return response()->json([
                'success'   => false,
                'message' => ['These credentials do not match our records.']
            ], 404);
        }

        $token = $check->createToken('token_login')->plainTextToken;

        $response = [
            'success'   => true,
            'message'   => 'Auth success.',
            'data'      => [
                'user'      => $check,
                'token'     => $token
            ]
        ];

        return response()->json($response);
    }
}
