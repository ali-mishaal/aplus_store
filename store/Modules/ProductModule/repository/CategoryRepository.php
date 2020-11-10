<?php

namespace Modules\ProductModule\Repository;


use App\Exceptions\BadRequestException;
use Modules\ProductModule\Entities\Category;
use Modules\ProductModule\Transformers\CategoryResource;
use Modules\ProductModule\Transformers\SubCategoryResource;
use Modules\ProductModule\Transformers\SingleResource;
use App\Helpers\UploaderHelper;

trait CategoryRepository
{
   use UploaderHelper;

   public function getAllCategories()
   {
     $category = Category::where('parent',NULL)->get();
     
     if($category)
     {
        $data = CategoryResource::collection($category);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }

   public function getAllSubCategories()
   {
     $category = Category::where('parent','!=',NULL)->get();
     
     if($category)
     {
        $data = SubCategoryResource::collection($category);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }



   public function CreateCategory($request)
   {
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      if(isset($request['parent']))$data['parent'] = $request['parent'];

      $data['image'] = $this->uploadFile($request['image'],'category');
     
      $createCategory = Category::create($data);
      if($createCategory)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('created successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

   public function UpdateCategory($request,$id)
   {
      $item = Category::find($id);
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];

      if(isset($request['parent']))$data['parent'] = $request['parent'];
      if(isset($request['image']))$data['image'] = $this->uploadFile($request['image'],'category');

      $updateCategory = $item->update($data);
      if($updateCategory)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('updated successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

  


   public function showCategory($id)
   {
      $item = Category::find($id);
      
      if($item)
     {
        $data = SingleResource::make($item);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }

   public function deleteCategory($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteCategories = Category::whereIn('id',$data)->delete();
      if($deleteCategories)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('deleted successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }


}
