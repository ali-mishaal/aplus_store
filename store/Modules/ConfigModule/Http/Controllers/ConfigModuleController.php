<?php

namespace Modules\ConfigModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ConfigModule\Repository\ConfigRepository;

class ConfigModuleController extends Controller
{
    use ConfigRepository;

    public function index()
    {
        $configs = $this->getAllConfig();
        return $configs;
    }
 

    public function update(Request $request, $id)
    {
        return $this->UpdateConfig($request);
    }

    
}
