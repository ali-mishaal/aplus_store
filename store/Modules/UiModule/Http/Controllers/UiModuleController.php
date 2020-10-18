<?php

namespace Modules\UiModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class UiModuleController extends Controller
{
    
    public function __invoke($page)
    {
        dd('fdsf');
    }

}
