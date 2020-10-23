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
            'name:ar'=>'required',
            'name:en'=>'required',
            'country_id'=>'required'
        ]);

        $country = $this->storeCity($data);
        return $country;
    }

  
    public function show($id)
    {
        return view('areamodule::show');
    }


    public function update(Request $request, $id)
    {
        //
    }

    public function destroy(Request $request , $id)
    {
        $data = json_decode($request->data,true);
        $data = collect($data)->pluck('id');
        City::whereIn('id',$data)->delete();
        return true;
    }
}
