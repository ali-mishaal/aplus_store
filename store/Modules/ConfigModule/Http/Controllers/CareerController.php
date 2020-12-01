<?php

namespace Modules\ConfigModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ConfigModule\Repository\CareerRepository;
use Modules\ConfigModule\Http\Requests\CareerRequest;
use Modules\ConfigModule\Http\Requests\GeneralUpdateRequest;

class CareerController extends Controller
{
    use CareerRepository;

    public function index()
    {
        $Careers = $this->getAllCareer();
        return $Careers;
    }

    

    public function store(CareerRequest $request)
    {
        $createCareer = $this->CreateCareer($request->all());
        return $createCareer;
    }


    public function show($id)
    {
        $Career = $this->showCareer($id);
        return $Career;
    }


    public function update(GeneralUpdateRequest $request, $id)
    {
        $updateCareer= $this->UpdateCareer($request->except('_method'),$id);
        return $updateCareer;
    }


    public function destroy(Request $request,$id)
    {
        $deleteCareer = $this->deleteCareer($request->except('_method'));
        return $deleteCareer;

    }
}
