<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserPost;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;

class AuthenticationController extends Controller
{

    /**
     * Store the incoming user post.
     *
     * @param  StoreUserPost $request
     * @return Response
     */
    public function register(StoreUserPost $request)
    {
        $user = User::create([
            'email' => $request->input('email'),
            'name' => $request->input('name'),
            'password' => bcrypt($request->input('name')),
            'api_token' => Str::random(60),
        ]);

        return response()->json($user);
    }
}