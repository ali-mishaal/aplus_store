<?php

namespace Modules\ConfigModule\Repository;


use App\Exceptions\BadRequestException;
use App\Helpers\UploaderHelper;
use Modules\ConfigModule\Entities\Career;
use Modules\ConfigModule\Transformers\CareerResouece;
use Modules\ConfigModule\Transformers\GeneralResouece;
use Modules\ConfigModule\Transformers\SingleGenaralResouece;



trait CareerRepository
{
   use UploaderHelper;

   public function getAllCareer()
   {
     $Career = Career::all();

     if($Career)
     {
        $data = GeneralResouece::collection($Career);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;
     }

     throw new BadRequestException();
   }


   public function CreateCareer($request)
   {
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];

      $data['image'] = $this->uploadFile($request['image'],'general');

      $createCareer= Career::create($data);
      if($createCareer)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.created_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }

   public function UpdateCareer($request,$id)
   {
      $item = Career::find($id);
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];

      if(isset($request['image']))$data['image'] = $this->uploadFile($request['image'],'general');

      $updateCareer= $item->update($data);
      if($updateCareer)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.updated_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }




   public function showCareer($id)
   {
      $item = Career::find($id);

      if($item)
     {
        $data = SingleGenaralResouece::make($item);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;
     }

     throw new BadRequestException();
   }

   public function deleteCareer($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteCareer = Career::whereIn('id',$data)->delete();
      if($deleteCareer)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.deleted_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }


}
