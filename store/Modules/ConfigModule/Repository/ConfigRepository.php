<?php

namespace Modules\ConfigModule\Repository;


use App\Exceptions\BadRequestException;
use Modules\ConfigModule\Entities\ConfigCategory;
use Modules\ConfigModule\Transformers\ConfigCategoryResource;

trait ConfigRepository
{

   public function getAllCategoryConfig()
   {
     $configCategory = ConfigCategory::all();
     

     if($configCategory)
     {
        $data = ConfigCategoryResource::collection($configCategory);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }

   public function CreateConfigCategory($data)
   {
      $createConfigCategory = ConfigCategory::create($data);
      if($createConfigCategory)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('created successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

   public function loginAdmin($request)
   {
       if (Auth::guard('admin')->attempt(['email' => $request->email,'password'=>$request->password]))
       {
           $tokenResult = Auth::guard('admin')->user()->createToken('Admin')->accessToken;
           $data = [
                       "access_token"=>$tokenResult,
                       "token_type"=>"Bearer"
                   ];
           $responseSuccess = \ResponseHelper::getInstance()
               ->setMessage('login success')
               ->setData($data)
               ->response();
           return $responseSuccess;
       }

        throw new NotAuthorizedException('May be email or password wrong');
   }

   public function create()
   {

   }

   public function edit()
   {

   }

   public function delete()
   {

   }

   public function show()
   {

   }


}
