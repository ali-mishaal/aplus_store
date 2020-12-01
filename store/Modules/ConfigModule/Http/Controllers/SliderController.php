<?php

namespace Modules\ConfigModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ConfigModule\Repository\SliderRepository;

class SliderController extends Controller
{
    use SliderRepository;

    public function index()
    {
        $getAllSliders = $this->getAllSliders();
        return $getAllSliders;
    }


    public function store(Request $request)
    {

        $rules = [
            'image'  => 'required|image',
        ];   
       
        $validation = \Validator::make($request->all(),$rules);
        if($validation->fails()){

            return response()->json(['code'=>400,'errors'=>$validation->messages()],400);
            exit();
        }
     
        $createSlider = $this->createSlider($request->all());
        return $createSlider;
    }


    public function show($id)
    {
        $slider = $this->showSlider($id);
        return $slider;
    }


    public function update(Request $request, $id)
    {
        $rules = [
            'image'  => 'required|image',
        ];   
       
        $validation = \Validator::make($request->all(),$rules);
        if($validation->fails()){

            return response()->json(['code'=>400,'errors'=>$validation->messages()],400);
            exit();
        }
        $updateSlider= $this->updateSlider($request->except('_method'),$id);
        return $updateSlider;
    }


    public function destroy(Request $request,$id)
    {
        $deleteSlider = $this->deleteSlider($request->except('_method'));
        return $deleteSlider;

    }

}
