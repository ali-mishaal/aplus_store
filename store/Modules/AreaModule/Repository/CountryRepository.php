<?php
namespace Modules\AreaModule\Repository;

use Modules\AreaModule\Entities\Country;
use Modules\AreaModule\Transformers\CountryResource;

class CountryRepository
{
    function getCountrries()
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

    function storeCountry($data)
    {
        $country = Country::create($data);
        if($country)
      {
         $responseSuccess = \ResponseHelper::getInstance()
         ->setMessage('created successfully')
         ->response();
         return $responseSuccess;
      }

      throw new BadRequestException();
    }

    function updateCountry($id,$data)
    {
        $country = Country::where('id',$id)->update($data);
        if($country)
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
