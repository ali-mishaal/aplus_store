<?php

namespace Modules\ProductModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ProductModule\Repository\AttributeRepository;
use Modules\ProductModule\Http\Requests\CategoryUpdateRequest;
use Illuminate\Support\Facades\Artisan;
class AttributeController extends Controller
{
    use AttributeRepository;

    public function index()
    {
       
        $attributes = $this->getAllAttributes();
        return $attributes;
    }

   

    public function store(CategoryUpdateRequest $request)
    {
        $createAttribute = $this->Createattribute($request->all());
        return $createAttribute;
    }

   
    public function show($id)
    {
     
        $attribute = $this->showAttribute($id);
        return $attribute;
    }


    public function update(CategoryUpdateRequest $request, $id)
    {
        $updateAttribute = $this->Updateattribute($request->except('_method'),$id);
        return $updateAttribute;
    }

   
    public function destroy(Request $request,$id)
    {
        $deleteAtribute = $this->deleteAttribute($request->except('_method'));
        return $deleteAtribute;
        
    }
}
