<?php

namespace Modules\ConfigModule\Http\Requests;


use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;

class ConfigCategoryRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title:en' => 'required|string',
            'title:ar' => 'required|string'
        ];
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }
    public function messages()
    {
// use trans instead on Lang 
        return [
                'title:en.required' => 'english title is required',
                'title:en.string' => 'english title must be string ',
                // 'oldpassword.required' => Lang::get('userpasschange.oldpasswordrequired'),
                // 'oldpassword.max' => Lang::get('userpasschange.oldpasswordmax255'),
                // 'newpassword.required' => Lang::get('userpasschange.newpasswordrequired'),
                // 'newpassword.min' => Lang::get('userpasschange.newpasswordmin6'),
                // 'newpassword.max' => Lang::get('userpasschange.newpasswordmax255'),
                // 'newpassword.alpha_num' =>Lang::get('userpasschange.newpasswordalpha_num'),
                // 'newpasswordagain.required' => Lang::get('userpasschange.newpasswordagainrequired'),
                // 'newpasswordagain.same:newpassword' => Lang::get('userpasschange.newpasswordagainsamenewpassword'),
                
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();

        throw new HttpResponseException(response()->json([
            'errors' => $errors
        ], Response::HTTP_UNPROCESSABLE_ENTITY));
    }
}
