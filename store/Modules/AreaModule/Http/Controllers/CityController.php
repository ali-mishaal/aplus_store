<?php

namespace Modules\AreaModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\AreaModule\Repository\CityRepository;
use Modules\AreaModule\Entities\City;

class CityController extends Controller
{
    use CityRepository;
    public function index()
    {
        $countries = $this->getCity();
        return $countries;
    }



    public function store(Request $request)
    {
        
        $data=$request->validate([
            'namear'=>'required',
            'nameen'=>'required',
            'country'=>'required'
        ]);

        $country = $this->storeCity($data);
        return $country;
    }

  
    public function show($id)
    {
        $item = City::find($id);
        $result =[];
        $result['titlear']=$item->translate('ar')->name; 
        $result['titleen']=$item->translate('en')->name; 
        $result['country']=$item->country->id; 
        $result['id']=$item->id; 
        return json_encode(['data'=>$result]);
    }


    public function update(Request $request, $id)
    {
        $updateCity= $this->updateCity($request->except('_method'),$id);
        return $updateCity;
    }

    public function destroy(Request $request , $id)
    {
        $data = json_decode($request->data,true);
        $data = collect($data)->pluck('id');
        City::whereIn('id',$data)->delete();
        return true;
    }
}
