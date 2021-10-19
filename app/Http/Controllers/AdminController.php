<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\School;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AdminController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8', 'max:255'],
            'schoolName' => ['required', 'string', 'min:10']
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
                'data'    => $isCreated
            ], 201);
        }
        return response()->json([
            'success' => false,
            'message' => 'Failed to create admin.',
        ], 409);
    }

    protected function _create(array $data)
    {
        if(Admin::where('email', $data['email'])->first() || School::where('schoolId', str_replace(' ', '-', Str::lower($data['schoolName'])))->first()) {
            return false;
        }

        $isSchoolCreated = School::create([
            'schoolId' => str_replace(' ', '-', Str::lower($data['schoolName'])),
            'schoolName' => $data['schoolName'],
        ]);

        $isAdminCreated = Admin::create([
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'schoolId' => $isSchoolCreated->schoolId,
        ]);

        return $isAdminCreated;
    }
}
