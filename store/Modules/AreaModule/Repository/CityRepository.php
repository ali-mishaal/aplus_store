<?php
namespace Modules\AreaModule\Repository;

use Modules\AreaModule\Entities\City;
use Modules\AreaModule\Transformers\CountryResource;

trait CityRepository
{
    function getCity()
    {
        $countries =  City::all();
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

    function storeCity($data)
    {
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
