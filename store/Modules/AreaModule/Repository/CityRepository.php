<?php
namespace Modules\AreaModule\Repository;

use Modules\AreaModule\Entities\City;
use Modules\AreaModule\Transformers\CityResource;

trait CityRepository
{
    function getCity()
    {
        $cities =  City::with('country')->get();
        if($cities)
        {
            $data = CityResource::collection($cities);
            $responseSuccess = \ResponseHelper::getInstance()
            ->setData($data)
            ->response();
            return $responseSuccess;
        }

        throw new BadRequestException();
    }

    function findCountry($id)
    {
        $country = City::find($id);
        if($country)
        {
            $data = CountryResource::make($country);
            $responseSuccess = \ResponseHelper::getInstance()
            ->setData($data)
            ->response();
            return $responseSuccess;
        }
    }

    function storeCity($request)
    {
        $data['ar']['name'] = $request['namear'];
        $data['en']['name'] = $request['nameen'];
        $data['country_id'] = $request['country'];
        $country = City::create($data);
        if($country)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('created successfully')
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
    }

    function updateCity($request,$id)
    {
        $item = City::find($id);
        $data['ar']['name'] = $request['namear'];
        $data['en']['name'] = $request['nameen'];
        $data['country_id'] = $request['country'];
        $updateCity = $item->update($data);
        if($updateCity)
        {
           $responseSuccess = \ResponseHelper::getInstance()
           ->setMessage('updated successfully')
           ->response();
           return $responseSuccess;  
        }
   
        throw new BadRequestException();
    }

    function deleteCountry($id)
    {
        $country = Country::destroy($id);
        if($country)
        {
            $responseSuccess = \ResponseHelper::getInstance()
            ->setMessage('deleted successfully')
            ->response();
            return $responseSuccess;
        }

        throw new BadRequestException();
    }

}
?>
