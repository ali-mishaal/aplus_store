<?php

namespace Modules\ConfigModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ConfigModule\Repository\NewsRepository;
use Modules\ConfigModule\Http\Requests\GeneralRequest;
use Modules\ConfigModule\Http\Requests\GeneralUpdateRequest;

class NewsController extends Controller
{
    use NewsRepository;

    public function index()
    {
        $News = $this->getAllNews();
        return $News;
    }

    

    public function store(GeneralRequest $request)
    {
        $createNews = $this->CreateNews($request->all());
        return $createNews;
    }


    public function show($id)
    {
        $News = $this->showNews($id);
        return $News;
    }


    public function update(GeneralUpdateRequest $request, $id)
    {
        $updateNews= $this->UpdateNews($request->except('_method'),$id);
        return $updateNews;
    }


    public function destroy(Request $request,$id)
    {
        $deleteNews= $this->deleteNews($request->except('_method'));
        return $deleteNews;

    }
}
