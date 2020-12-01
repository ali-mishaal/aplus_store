<?php

namespace Modules\ConfigModule\Repository;


use App\Exceptions\BadRequestException;
use App\Helpers\UploaderHelper;
use Modules\ConfigModule\Entities\News;
use Modules\ConfigModule\Transformers\GeneralResouece;
use Modules\ConfigModule\Transformers\SingleGenaralResouece;

trait NewsRepository
{
   use UploaderHelper;

   public function getAllNews()
   {
     $news = News::all();

     if($news)
     {
        $data = GeneralResouece::collection($news);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;
     }

     throw new BadRequestException();
   }


   public function CreateNews($request)
   {
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];

      $data['image'] = $this->uploadFile($request['image'],'general');

      $createNews = News::create($data);
      if($createNews)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.created_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }

   public function UpdateNews($request,$id)
   {
      $item = News::find($id);
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];

      if(isset($request['image']))$data['image'] = $this->uploadFile($request['image'],'general');

      $updateNews= $item->update($data);
      if($updateNews)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.updated_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }




   public function showNews($id)
   {
      $item = News::find($id);

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

   public function deleteNews($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteNews = News::whereIn('id',$data)->delete();
      if($deleteNews)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage(__('message.deleted_success'))
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
   }


}
