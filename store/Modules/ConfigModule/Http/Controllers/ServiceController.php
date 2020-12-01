<?php

namespace Modules\ConfigModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ConfigModule\Repository\ServiceRepository;
use Modules\ConfigModule\Http\Requests\GeneralRequest;
use Modules\ConfigModule\Http\Requests\GeneralUpdateRequest;

class ServiceController extends Controller
{
    use ServiceRepository;

    public function index()
    {
        $services = $this->getAllServices();
        return $services;
    }

    

    public function store(GeneralRequest $request)
    {
        $createService = $this->CreateService($request->all());
        return $createService;
    }


    public function show($id)
    {
        $service = $this->showService($id);
        return $service;
    }


    public function update(GeneralUpdateRequest $request, $id)
    {
        $updateService= $this->UpdateService($request->except('_method'),$id);
        return $updateService;
    }


    public function destroy(Request $request,$id)
    {
        $deleteService = $this->deleteService($request->except('_method'));
        return $deleteService;

    }

  
}
