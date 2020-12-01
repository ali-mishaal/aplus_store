<?php

namespace Modules\UiModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\UiModule\Repository\CartRepository;

class CartController extends Controller
{
    use CartRepository;

    public function addToCart(Request $request)
    {
       $addToCart = $this->checkProduct($request->all());
       return $addToCart;
    }

  
    public function refreshCart(Request $request)
    {
        
        $refreshCart = $this->checkProductsCart($request->all());
       return $refreshCart;
    }

   
}
