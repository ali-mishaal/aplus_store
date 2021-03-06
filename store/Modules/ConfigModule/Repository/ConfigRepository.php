<?php

namespace Modules\ConfigModule\Repository;


use App\Exceptions\BadRequestException;
use Modules\ConfigModule\Entities\ConfigCategory;
use Modules\ConfigModule\Entities\Config;
use Modules\ConfigModule\Transformers\ConfigCategoryResource;
use Modules\ConfigModule\Transformers\ConfigResource;

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


   public function getAllConfig()
   {
     $configs = Config::all();
   
     if($configs)
     {
        $data = ConfigResource::collection($configs);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }

   public function CreateConfigCategory($request)
   {
      $data['ar']['title'] = $request['titlear'];
      $data['en']['title'] = $request['titleen'];
     
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

   public function UpdateConfigCategory($request,$id)
   {
      $item = ConfigCategory::find($id);
      $data['ar']['title'] = $request['titlear'];
      $data['en']['title'] = $request['titleen'];
      $updateConfigCategory = $item->update($data);
      if($updateConfigCategory)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('updated successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

   public function UpdateConfig($data)
   {
      
        $data = $data->except('_method');
        foreach($data as $key=>$value)
        {
            $getConfig = Config::where('key',$key)->first();
            $dataUpdated=[];
            $dataUpdated['description:en'] = $value;
            $dataUpdated['description:ar'] = $value;
            // $dataUpdated['description:en'] = $getConfig->type == 3?$data[$key[0]][2]:'';
            // $dataUpdated['description:ar'] = $getConfig->type == 3?$data[$key[0]][2]:'';
            $getConfig->update($dataUpdated);  
          
        }

        $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('updated successfully')
         ->response();

         if($responseSuccess)
            return $responseSuccess; 

      throw new BadRequestException();
   }


   


}
