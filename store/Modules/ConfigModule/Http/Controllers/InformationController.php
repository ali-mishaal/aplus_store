<?php

namespace Modules\ConfigModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ConfigModule\Repository\InformationRepository;
use Modules\ConfigModule\Http\Requests\GeneralRequest;
use Modules\ConfigModule\Http\Requests\GeneralUpdateRequest;

class InformationController extends Controller
{ 
    use InformationRepository;

    public function index()
    {
        $Informations = $this->getAllInformations();
        return $Informations;
    }

    

    public function store(GeneralRequest $request)
    {
        $createInformation = $this->CreateInformation($request->all());
        return $createInformation;
    }


    public function show($id)
    {
        $Information = $this->showInformation($id);
        return $Information;
    }


    public function update(GeneralUpdateRequest $request, $id)
    {
        $updateInformation= $this->UpdateInformation($request->except('_method'),$id);
        return $updateInformation;
    }


    public function destroy(Request $request,$id)
    {
        $deleteInformation = $this->deleteInformation($request->except('_method'));
        return $deleteInformation;

    }
}
