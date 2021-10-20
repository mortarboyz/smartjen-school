<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:sanctum:admins')->except('index');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $result = ($request->query('role')) ? User::where('roleId', $request->query('role'))->get() : User::all();

        if ($result) {
            return response()->json([
                'success' => true,
                'message' => 'Get user data success.',
                'data'    => $result
            ], 201);
        }
        return response()->json([
            'success' => false,
            'message' => 'No data found.',
        ], 404);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'username' => ['required', 'string', 'min:8', 'max:255', 'unique:users,username'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email'],
            'role' => ['required', 'integer', 'exists:roles,id'],
            'password' => ['required', 'string', 'min:8']
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to create user.',
                'data' => $validator->errors()
            ], 400);
        };

        $isUpdated = User::create([
            'username' => $request->username,
            'email' => $request->email,
            'roleId' => $request->role,
            'schoolId' => $request->user()->schoolId,
            'password' => Hash::make($request->password)
        ]);

        if ($isUpdated) {
            return response()->json([
                'success' => true,
                'message' => 'Account created.',
                'data'    => [
                    'user' => $isUpdated,
                ]
            ], 201);
        }
        return response()->json([
            'success' => false,
            'message' => 'Failed to create user.',
        ], 409);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            $data = $request->except('schoolId', 'roleId');
            $data['password'] = Hash::make($data['password']);
            $validator = Validator::make($data, [
                'username' => ['string', 'min:8', 'max:255', 'unique:users,username'],
                'email' => ['string', 'email', 'max:255', 'unique:users,email'],
                'password' => ['string', 'min:8']
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Failed to update user.',
                    'data' => $validator->errors()
                ], 400);
            };

            $isUpdated = User::find($id)->update($data);
            if ($isUpdated) {
                return response()->json([
                    'success' => true,
                    'message' => 'User updated.',
                ], 200);
            }
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to update user.',
            ], 409);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try {
            $user = User::find($id);
            $user->delete();
            return response()->json([
                'success' => true,
                'message' => 'User deleted.',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete user.',
            ], 409);
        }
    }
}
