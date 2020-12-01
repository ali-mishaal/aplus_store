<?php

namespace Modules\ConfigModule\Repository;


use App\Exceptions\BadRequestException;
use App\Helpers\UploaderHelper;
use Modules\ConfigModule\Entities\Information;
use Modules\ConfigModule\Transformers\GeneralResouece;
use Modules\ConfigModule\Transformers\SingleGenaralResouece;

trait InformationRepository
{
   use UploaderHelper;

   public function getAllInformations()
   {
      
     $Information = Information::all();

     if($Information)
     {
        $data = GeneralResouece::collection($Information);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;
     }

     throw new BadRequestException();
   }


   public function CreateInformation($request)
   {
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];

      $data['image'] = $this->uploadFile($request['image'],'general');

      $createInformation= Information::create($data);
      if($createInformation)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.created_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }

   public function UpdateInformation($request,$id)
   {
      $item = Information::find($id);
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];

      if(isset($request['image']))$data['image'] = $this->uploadFile($request['image'],'general');

      $updateInformation = $item->update($data);
      if($updateInformation)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.updated_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }




   public function showInformation($id)
   {
      $item = Information::find($id);

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

   public function deleteInformation($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteInformation = Information::whereIn('id',$data)->delete();
      if($deleteInformation)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.deleted_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }

}
