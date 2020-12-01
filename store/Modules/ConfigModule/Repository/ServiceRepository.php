<?php

namespace Modules\ConfigModule\Repository;


use App\Exceptions\BadRequestException;
use App\Helpers\UploaderHelper;
use Modules\ConfigModule\Entities\Service;
use Modules\ConfigModule\Transformers\GeneralResouece;
use Modules\ConfigModule\Transformers\SingleGenaralResouece;

trait ServiceRepository
{
   use UploaderHelper;

   public function getAllServices()
   {
     $service = Service::all();

     if($service)
     {
        $data = GeneralResouece::collection($service);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;
     }

     throw new BadRequestException();
   }


   public function CreateService($request)
   {
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];

      $data['image'] = $this->uploadFile($request['image'],'general');

      $createService = Service::create($data);
      if($createService)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.created_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }

   public function UpdateService($request,$id)
   {
      $item = Service::find($id);
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];

      if(isset($request['image']))$data['image'] = $this->uploadFile($request['image'],'general');

      $updateService = $item->update($data);
      if($updateService)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.updated_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }




   public function showService($id)
   {
      $item = Service::find($id);

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

   public function deleteService($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteService = Service::whereIn('id',$data)->delete();
      if($deleteService)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.deleted_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }


}
