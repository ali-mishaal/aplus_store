<?php

namespace Modules\AreaModule\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Illuminate\Contracts\Support\Renderable;
use Modules\AreaModule\Repository\CountryRepository;
use Modules\AreaModule\Entities\Country;
class CountryController extends Controller
{
    use CountryRepository;
    /**
     * Display a listing of the resource.
     * @return Renderable
     */
    public function index()
    {
        $countries = $this->getCountries();
        return $countries;
    }

  

    public function store(Request $request)
    {
        $data=$request->validate([
            'namear'=>'required',
            'nameen'=>'required'
        ]);

        $country = $this->storeCountry($data);
        return $country;
    }

    
    public function show($id)
    {
        $item = Country::find($id);
        $result =[];
        $result['titlear']=$item->translate('ar')->name; 
        $result['titleen']=$item->translate('en')->name; 
        $result['id']=$item->id; 
        return json_encode(['data'=>$result]);
    }

   
    public function update(Request $request, $id)
    {
        $updateCountry= $this->updateCountry($request->except('_method'),$id);
        return $updateCountry;
    }

    public function destroy(Request $request , $id)
    {
        $data = json_decode($request->data,true);
        $data = collect($data)->pluck('id');
        Country::whereIn('id',$data)->delete();
        return true;
    }
}
