<?php
namespace Modules\AreaModule\Repository;

use Modules\AreaModule\Entities\Country;
use Modules\AreaModule\Transformers\CountryResource;

trait CountryRepository
{
    function getCountries()
    {
        $countries =  Country::all();
        if($countries)
        {
            $data = CountryResource::collection($countries);
            $responseSuccess = \ResponseHelper::getInstance()
            ->setData($data)
            ->response();
            return $responseSuccess;
        }

        throw new BadRequestException();
    }

    function findCountry($id)
    {
        $country = Country::find($id);
        if($country)
        {
            $data = CountryResource::make($country);
            $responseSuccess = \ResponseHelper::getInstance()
            ->setData($data)
            ->response();
            return $responseSuccess;
        }
    }

    function storeCountry($request)
    {
      $data['ar']['name'] = $request['namear'];
      $data['en']['name'] = $request['nameen'];
     
      $createCuntry = Country::create($data);
      if($createCuntry)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('created successfully')
         ->response();
         return $responseSuccess;  
      }
 
      throw new BadRequestException();
    }

    function updateCountry($request,$id)
    {
        $item = Country::find($id);
        $data['ar']['name'] = $request['namear'];
        $data['en']['name'] = $request['nameen'];
        $updateCountry = $item->update($data);
        if($updateCountry)
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
