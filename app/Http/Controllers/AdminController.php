<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\School;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;

class AdminController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255', 'unique:admins'],
            'password' => ['required', 'string', 'min:8', 'max:255'],
            'schoolName' => ['required', 'string', 'min:10', Rule::unique('schools')->where('schoolId', str_replace(' ', '-', Str::lower($request->schoolName)))]
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create admin.',
                'data' => $validator->errors()
            ], 400);
        }

        $isCreated = $this->_create($request->all());

        if ($isCreated) {
            return response()->json([
                'success' => true,
                'message' => 'Admin account created.',
                'data'    => [
                    'user' => $isCreated,
                    'token' => $isCreated->createToken('token_admin')->plainTextToken,
                ]
            ], 201);
        }
        return response()->json([
            'success' => false,
            'message' => 'Failed to create admin.',
        ], 409);
    }

    public function invite(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'string', 'min:8', 'max:255', 'unique:users,username'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'role' => ['required', 'integer', 'exists:roles,id'],
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to invite user.',
                'data' => $validator->errors()
            ], 400);
        };

        $isCreated = $this->_invite($request->all(), $request->user()->schoolId, $randomStringForPassword = Str::random(8));

        if ($isCreated) {
            // TODO: SEND EMAIL TO TARGET;
            return response()->json([
                'success' => true,
                'message' => 'Account invited.',
                'data'    => [
                    'user' => $isCreated,
                    'password' => $randomStringForPassword,
                ]
            ], 201);
        }
        return response()->json([
            'success' => false,
            'message' => 'Failed to invite user.',
        ], 409);
    }

    protected function _create(array $data)
    {
        try {
            $isSchoolCreated = School::create([
                'schoolId' => str_replace(' ', '-', Str::lower($data['schoolName'])),
                'schoolName' => $data['schoolName'],
            ]);

            $isAdminCreated = Admin::create([
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
                'schoolId' => $isSchoolCreated->id,
            ]);
            return $isAdminCreated;
        } catch (\Throwable $th) {
            return false;
        }
    }

    protected function _invite(array $data, $schoolId, $randomPassword)
    {
        try {
            $invitedUsers = User::create([
                'username' => $data['username'],
                'email' => $data['email'],
                'roleId' => $data['role'],
                'schoolId' => $schoolId,
                'password' => Hash::make($randomPassword)
            ]);
            return $invitedUsers;
        } catch (\Throwable $th) {
            return false;
        }
    }
}
