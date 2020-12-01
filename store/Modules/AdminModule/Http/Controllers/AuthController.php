<?php

namespace Modules\AdminModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    
    public function __construct()
    {
        $this->middleware('auth:admin-api', ['except' => ['login']]);
    }

    
    public function login()
    {
        $credentials = request(['email', 'password']);
        if (! $token = auth()->guard('admin-api')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithToken($token);
    }

  
    public function me()
    {
        return response()->json(auth()->guard('admin-api')->user());
    }

  
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user'=>auth()->guard('admin-api')->user()
        ]);
    }
}
