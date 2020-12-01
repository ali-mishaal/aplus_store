<?php

namespace Modules\UiModule\Repository;


use App\Exceptions\BadRequestException;
use App\Exceptions\NotFoundExeption;
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
use Modules\UiModule\Transformers\CartResource;

use App\Helpers\UploaderHelper;

trait CartRepository
{

    public function checkProduct($data)
    {
      
        $checkProduct = Product::where('id',$data['id'])
        ->where('quantity','>=',$data['quantity'])
        ->first();
        if($checkProduct)
        {
            $data = CartResource::make($checkProduct);
            $responseSuccess = \ResponseHelper::getInstance()
            ->setData($data)
            ->response();
           return $responseSuccess;
        }
  
        throw new NotFoundExeption(__('message.notProductQuantity'));
    }

    public function checkProductsCart($data)
    {

        $products_id = collect($data)->pluck('id');
      
        $checkProduct = Product::whereIn('id',$products_id)
        ->get()
        ->filter(function($item,$i) use ($data)
        {
            return $item->quantity >= $data[$i]['quantity'];
        });
      
        if($checkProduct)
        {
        $data = CartResource::collection($checkProduct);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;
        }
        throw new NotFoundExeption(__('message.notProductQuantity'));
    }
}