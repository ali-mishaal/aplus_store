<?php

namespace Modules\ProductModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ProductModule\Repository\ProductRepository;
use Modules\ProductModule\Http\Requests\ProductRequest;

class ProductController extends Controller
{
    use ProductRepository;

    public function index()
    {
        $products = $this->getAllProducts();
        return $products;
    }

 

    public function store(Request $request)
    {
       
        $createProduct = $this->CreateProduct($request->all());
        return $createProduct;
    }

   
    public function show($id)
    {
        $product = $this->showProduct($id);
        return $product;
    }


    public function update(Request $request, $id)
    {
       
        $UpdateProduct = $this->UpdateProduct($request->except('_method'),$id);
        return $UpdateProduct;
    }

   
    public function destroy(Request $request,$id)
    {
        $deleteProduct = $this->deleteProduct($request->except('_method'));
        return $deleteProduct;
        
    }
}
