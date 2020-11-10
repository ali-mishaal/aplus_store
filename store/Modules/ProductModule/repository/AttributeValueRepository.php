<?php

namespace Modules\ProductModule\Repository;


use App\Exceptions\BadRequestException;
use Modules\ProductModule\Entities\AttributeValue;
use Modules\ProductModule\Transformers\AttributeValueResource;


trait AttributeValueRepository
{

   public function getAllAttributesValue()
   {
     $attributeValues = AttributeValue::get();
     
     if($attributeValues)
     {
        $data = AttributeValueResource::collection($attributeValues);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }



   public function CreateattributeValue($request)
   {
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['attribute_id']=$request['attribute_id'];
     
      $createAttributeValue = AttributeValue::create($data);
      if($createAttributeValue)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('created successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

   public function UpdateattributeValue($request,$id)
   {
      $item = AttributeValue::find($id);
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['attribute_id']=$request['attribute_id'];

      $updateAttributeValue = $item->update($data);
      if($updateAttributeValue)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('updated successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

  


   public function showAttributeValue($id)
   {
      $item = AttributeValue::find($id);
      
      if($item)
     {
        $data = AttributeValueResource::make($item);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }

   public function deleteAttributeValue($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteAttributeValue = AttributeValue::whereIn('id',$data)->delete();
      if($deleteAttributeValue)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('deleted successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }


}
