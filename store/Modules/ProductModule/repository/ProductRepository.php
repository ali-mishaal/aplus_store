<?php

namespace Modules\ProductModule\Repository;


use App\Exceptions\BadRequestException;
use Modules\ProductModule\Entities\Category;
use Modules\ProductModule\Entities\Product;
use Modules\ProductModule\Entities\ProductAttribute;
use Modules\ProductModule\Transformers\ProductResource;
use Modules\ProductModule\Transformers\SingleProductResource;
use App\Helpers\UploaderHelper;

trait ProductRepository
{
   use UploaderHelper;

   public function getAllProducts()
   {
     $products = Product::all();
     
     if($products)
     {
        $data = ProductResource::collection($products);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }

  


   public function CreateProduct($request)
   {
    
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];
      $data['model']=$request['model'];
      $data['quantity']=$request['quantity'];
      $data['category_id']=$request['category_id'];
      $data['measurement_id']=$request['measurement_id'];
      $data['image'] = $this->uploadFile($request['image'],'product');
    //   $data['imgs'] = $this->uploadAlbum($request['imgs'],'product');

      $data['imgs'] = 'cxzcx';
    
     
      $createProduct = Product::create($data);

      
      
      if($createProduct)
      {
          $values = $request['attributeValue'];
          for($i=0;$i<count($values);$i++)
          {
              $attribute['attribute_id']=$request['input-'.$i.'attribute_id'];
              $attribute['value']=$values[$i];
              $attribute['product_id']=$createProduct->id;
              $createProductAttribute = ProductAttribute::create($attribute);
          }
       
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('created successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

   public function UpdateProduct($request,$id)
   {
      $item = Product::find($id);
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
      $data['ar']['description'] = $request['descriptionar'];
      $data['en']['description'] = $request['descriptionen'];
      $data['model']=$request['model'];
      $data['quantity']=$request['quantity'];
      $data['category_id']=$request['category_id'];
      $data['measurement_id']=$request['measurement_id'];
     
     

      if(isset($request['image']))$data['image'] = $this->uploadFile($request['image'],'product');
    //   if(isset($request['imgs']))$data['imgs'] = $this->uploadAlbum($request['imgs'],'product');

if(isset($request['imgs']))$data['imgs'] ='dsfdsf';

     



      $updateProduct = $item->update($data);
      if($updateProduct)
      {    
          ProductAttribute::where('product_id',$item->id)->delete();
          $values = $request['attributeValue'];
          for($i=0;$i<count($values);$i++)
          {
              $attribute['attribute_id']=$request['input-'.$i.'attribute_id'];
              $attribute['value']=$values[$i];
              $attribute['product_id']=$item->id;
              $createProductAttribute = ProductAttribute::create($attribute);
          }
       
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('updated successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }

  


   public function showProduct($id)
   {
      $item = Product::find($id);
      
      if($item)
     {
        $data = SingleProductResource::make($item);
        $responseSuccess = \ResponseHelper::getInstance()
        ->setData($data)
        ->response();
        return $responseSuccess;  
     }

     throw new BadRequestException();
   }

   public function deleteProduct($request)
   {
      $data = json_decode($request['data'],true);
      $data = collect($data)->pluck('id');
      $deleteProduct = Product::whereIn('id',$data)->delete();
      if($deleteProduct)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('deleted successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
   }


}
