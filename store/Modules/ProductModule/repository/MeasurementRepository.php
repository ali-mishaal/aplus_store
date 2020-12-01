<?php

namespace Modules\ProductModule\Repository;


use App\Exceptions\BadRequestException;
use Modules\ProductModule\Entities\Measurement;
use Modules\ProductModule\Transformers\AttributeREsource;


trait MeasurementRepository
{

   public function getAllMeasurements()
   {
     $measurements = Measurement::get();
     
     if($measurements)
     {
        $data = AttributeREsource::collection($measurements);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }



   public function CreateMeasurement($request)
   {
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
     
      $createAttribute = Measurement::create($data);
      if($createAttribute)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('created successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

   public function UpdateMeasurement($request,$id)
   {
      $item = Measurement::find($id);
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];

      $updateMeasurement = $item->update($data);
      if($updateMeasurement)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('updated successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

  


   public function showMeasurement($id)
   {
      $item = Measurement::find($id);
      $result['titlear']=$item->translate('ar')->name; 
        $result['titleen']=$item->translate('en')->name; 
        $result['id']=$item->id; 
        return json_encode(['data'=>$result]);
        
    //   if($item)
    //  {
    //     $data = AttributeREsource::make($item);
    //     $responseSuccess = \ResponseHelper::getInstance()
    //     ->setData($data)
    //     ->response();
    //     return $responseSuccess;  
    //  }

    //  throw new BadRequestException();
   }

   public function deleteMeasurement($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteMeasurement = Measurement::whereIn('id',$data)->delete();
      if($deleteMeasurement)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('deleted successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }


}
