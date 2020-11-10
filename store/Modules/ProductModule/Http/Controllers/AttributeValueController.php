<?php

namespace Modules\ProductModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ProductModule\Repository\AttributeValueRepository;
use Modules\ProductModule\Http\Requests\AttributeValueRequest;

class AttributeValueController extends Controller
{
    use AttributeValueRepository;

    public function index()
    {
        $attributeValues = $this->getAllAttributesValue();
        return $attributeValues;
    }

   

    public function store(AttributeValueRequest $request)
    {
        $createAttributeValue = $this->CreateattributeValue($request->all());
        return $createAttributeValue;
    }

   
    public function show($id)
    {
        $attributeValue = $this->showAttributeValue($id);
        return $attributeValue;
    }


    public function update(AttributeValueRequest $request, $id)
    {
        $updateAttributeValue = $this->UpdateattributeValue($request->except('_method'),$id);
        return $updateAttributeValue;
    }

   
    public function destroy(Request $request,$id)
    {
        $deleteAtributeVAlue = $this->deleteAttributeValue($request->except('_method'));
        return $deleteAtributeVAlue;
        
    }
}
