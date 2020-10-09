<?php

namespace App\Http\Controllers;

use App\Http\Requests\CheckLoginPost;
use App\Http\Requests\StoreUserPost;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthenticationController extends Controller
{

    /**
     *
     * @param  StoreUserPost $request
     * @return Response
     */
    public function register(StoreUserPost $request)
    {
        $user = User::create([
            'email' => $request->input('email'),
            'name' => $request->input('name'),
            'password' => bcrypt($request->input('password')),
            'api_token' => Str::random(60),
        ]);

        return response()->json($user);
    }

    public function login(CheckLoginPost $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = User::where('email', $request->input('email'))
                ->firstOrFail();

            return response()->json($user);
        } else {
            return response()->json(['error' => 'Mauvais identifiants de connexion !']);
        }
    }
}