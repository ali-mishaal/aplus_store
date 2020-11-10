<?php

namespace Modules\ProductModule\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Response;

class ProductRequest extends FormRequest
{
    
    public function rules()
    {
        return [
            'namear' => 'required|string',
            'nameen' => 'required|string',
            'category_id' => 'required|numeric',
            'measurement_id' => 'required|numeric',
            'descriptionar' => 'required|string',
            'descriptionen' => 'required|string',
            'quantity' => 'required|numeric',
            'model' => 'required|string',
            'attribute_id'=>'required',
            'attributeValue'=>'required',
            'image'  => 'required|image',
            'imgs'  => 'required'
        ];
    }
    public function authorize()
    {
        return true;
    }

  

    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors();

        throw new HttpResponseException(response()->json([
            'errors' => $errors
        ], Response::HTTP_UNPROCESSABLE_ENTITY));
    }
}
