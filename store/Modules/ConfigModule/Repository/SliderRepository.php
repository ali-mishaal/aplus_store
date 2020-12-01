<?php

namespace Modules\ConfigModule\Repository;


use App\Exceptions\BadRequestException;
use Modules\ConfigModule\Entities\Slider;
use App\Helpers\UploaderHelper;

trait SliderRepository
{
   use UploaderHelper;

   public function getAllSliders()
   {
     $slider = Slider::get()
     ->map(function($item){
         return ['id'=>$item->id,'image'=>asset('/files/slider/'.$item->image)];
     });

     if($slider)
     {
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($slider)
        ->response();
        return $responseSuccess;
     }

     throw new BadRequestException();
   }


   public function createSlider($request)
   {

      $data['image'] = $this->uploadFile($request['image'],'slider');

      $createSlider = Slider::create($data);
      if($createSlider)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.created_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }

   public function updateSlider($request,$id)
   {
      $item = Slider::find($id);

      $data['image'] = $this->uploadFile($request['image'],'slider');

      $updateSlider = $item->update($data);
      if($updateSlider)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.updated_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }




   public function showSlider($id)
   {
 
      $item = Slider::find($id);

      if($item)
     {
        $data = ['image'=>asset('/files/slider/'.$item->image)];
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;
     }

     throw new BadRequestException();
   }

   public function deleteSlider($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteSlider = Slider::whereIn('id',$data)->delete();
      if($deleteSlider)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.deleted_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }


}
