<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);


        $user = User::where(['email' => $request->email])->first();
        if(!$user)
        {
            return response([
                'status' => false,
                'message' => "Email or Password wrong"
            ]);
        }

        if(!Hash::check($request->password,$user->password))
        {
            return response([
                'status' => false,
                'message' => "Email or Password wrong"
            ]);   
        }

        $token = $user->createToken($user->email, ['server:update'])->plainTextToken;

        return response([
            'status' => true,
            'data' => [
                'token' => $token
            ]
        ]);

    }

    public function user()
    {
        $user = auth()->user();
        if($user)
        {
            return response([
                'status' => true,
                'data' => $user
            ]);
        }
        return response([
            'status' => false,
            'message' => "Error"
        ]);
    }
}
