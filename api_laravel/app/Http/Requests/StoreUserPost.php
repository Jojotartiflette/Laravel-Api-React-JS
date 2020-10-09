<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserPost extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:150|min:3',
            'email' => 'required|max:150|min:3|unique:users',
            'password' => 'required|min:8',
            'confirm_password' => 'required|same:password',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Vous devez spécifier votre nom',
            'email.required' => 'Vous devez spécifier votre email',
            'email.unique' => 'Cet email est déjà utilisé',
            'password.min' => 'Votre mot de passe doit faire au minimum 8 caractères',
            'confirm_password.same' => 'Les mots de passe ne sont pas identiques',
        ];
    }
}
