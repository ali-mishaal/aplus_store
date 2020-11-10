<?php

namespace Modules\ProductModule\Repository;


use App\Exceptions\BadRequestException;
use Modules\ProductModule\Entities\Attribute;
use Modules\ProductModule\Transformers\AttributeREsource;


trait AttributeRepository
{

   public function getAllAttributes()
   {
     $attributes = Attribute::get();
     
     if($attributes)
     {
        $data = AttributeREsource::collection($attributes);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }



   public function Createattribute($request)
   {
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
     
      $createAttribute = Attribute::create($data);
      if($createAttribute)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('created successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

   public function Updateattribute($request,$id)
   {
      $item = Attribute::find($id);
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];

      $updateAttribute = $item->update($data);
      if($updateAttribute)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('updated successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

  


   public function showAttribute($id)
   {
      $item = Attribute::find($id);
      
      if($item)
     {
        $data = AttributeREsource::make($item);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }

   public function deleteAttribute($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteAttribute = Attribute::whereIn('id',$data)->delete();
      if($deleteAttribute)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('deleted successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }


}
