<?php

namespace Modules\ProductModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ProductModule\Http\Requests\CategoryUpdateRequest;
use Modules\ProductModule\Repository\MeasurementRepository;

class MeasurementController extends Controller
{ 
    use MeasurementRepository;

    public function index()
    {
        $measurements = $this->getAllMeasurements();
        return $measurements;
    }

   

    public function store(CategoryUpdateRequest $request)
    {
        $createMeasurement = $this->CreateMeasurement($request->all());
        return $createMeasurement;
    }

   
    public function show($id)
    {
        $measurement = $this->showMeasurement($id);
        return $measurement;
    }


    public function update(CategoryUpdateRequest $request, $id)
    {
        $updateMeasurement = $this->UpdateMeasurement($request->except('_method'),$id);
        return $updateMeasurement;
    }

   
    public function destroy(Request $request,$id)
    {
        $deleteMeasurement = $this->deleteMeasurement($request->except('_method'));
        return $deleteMeasurement;
        
    }
}
