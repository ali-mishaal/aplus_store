<?php

namespace Modules\ConfigModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ConfigModule\Entities\ConfigCategory;
use Modules\ConfigModule\Repository\ConfigRepository;
use Illuminate\Support\Facades\Validator;
use Modules\ConfigModule\Http\Requests\ConfigCategoryRequest;

class ConfigCategoryController extends Controller
{
    use ConfigRepository;

    public function index()
    {
        $configCategories = $this->getAllCategoryConfig();
        return $configCategories;
    }

    public function store(ConfigCategoryRequest $request)
    {
        $createConfigCategory = $this->CreateConfigCategory($request->all());
        return $createConfigCategory;
    }

   
    public function show($id)
    {
        $item = ConfigCategory::find($id);
        $result =[];
        $result['titlear']=$item->translate('ar')->title; 
        $result['titleen']=$item->translate('en')->title; 
        $result['id']=$item->id; 
        return json_encode(['data'=>$result]);
    }


    public function update(Request $request, $id)
    {
        return $request->all();
        $item = ConfigCategory::find($id);
        $item->update($request->except('_method'));
    }

   
    public function destroy(Request $request,$id)
    {
        $data = json_decode($request->data,true);
        $data = collect($data)->pluck('id');
        ConfigCategory::whereIn('id',$data)->delete();
        return true;
    }
}
