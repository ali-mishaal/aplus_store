<?php

namespace Modules\UiModule\Repository;


use App\Exceptions\BadRequestException;
use Modules\ProductModule\Entities\Category;
use Modules\ProductModule\Transformers\CategoryResource;
use Modules\ProductModule\Transformers\SubCategoryResource;
use Modules\ProductModule\Transformers\SingleResource;
use Modules\ProductModule\Entities\Product;
use Modules\ProductModule\Transformers\ApiProductSimpleResource;
use Modules\ConfigModule\Entities\Slider;
use Modules\ConfigModule\Entities\News;
use Modules\ConfigModule\Entities\Information;
use Modules\ConfigModule\Entities\Career;
use Modules\ConfigModule\Entities\Service;

use App\Helpers\UploaderHelper;

trait HomeRepository
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

    public function getRandomCategories()
    {
        $category = Category::where('parent',NULL)->get();

        if($category)
        {
            if ($category->count()>8){
                $category = $category->random(8);
            }
            $data = CategoryResource::collection($category);
            $responseSuccess = \ResponseHelper::getInstance()
                ->setData($data)
                ->response();
            return $responseSuccess;
        }

        throw new BadRequestException();
    }

    public function getLatestProducts()
    {
        $products = Product::orderByDesc('id')->get()->take(12);

        if($products)
        {
            $data = ApiProductSimpleResource::collection($products);
            $responseSuccess = \ResponseHelper::getInstance()
                ->setData($data)
                ->response();
            return $responseSuccess;
        }

        throw new BadRequestException();
    }

    
    public function getAllSlider()
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
    }

    public function getLatestRepoNews()
    {
      $news = News::get()
      ->map(function($item){
          return ['id'=>$item->id,'name'=>$item->name];
      });
 
      if($news)
      {
         if ($news->count()>8){
            $news = $news->random(8);
          }
         $responseSuccess = \ResponseHelper::getInstance()
         ->setData($news)
         ->response();
         return $responseSuccess;
      }
    }

    public function getLatestRepoInformations()
    {
      $informations = Information::get()
      ->map(function($item){
          return ['id'=>$item->id,'name'=>$item->name];
      });
 
      if($informations)
      {
         if ($informations->count()>8){
            $informations = $informations->random(8);
          }
         $responseSuccess = \ResponseHelper::getInstance()
         ->setData($informations)
         ->response();
         return $responseSuccess;
      }
    }

    public function getLatesRepoCareers()
    {
      $careers = Career::get()
      ->map(function($item){
          return ['id'=>$item->id,'name'=>$item->name];
      });
 
      if($careers)
      {
         if ($careers->count()>8){
            $careers = $careers->random(8);
          }
         $responseSuccess = \ResponseHelper::getInstance()
         ->setData($careers)
         ->response();
         return $responseSuccess;
      }
    }

    public function getLatestRepoServices()
    {
      $services = Service::get()
      ->map(function($item){
          return ['id'=>$item->id,'name'=>$item->name];
      });
 
      if($services)
      {
         if ($services->count()>8){
            $services = $services->random(8);
          }
         $responseSuccess = \ResponseHelper::getInstance()
         ->setData($services)
         ->response();
         return $responseSuccess;
      }
    }




}
