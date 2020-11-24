<?php

namespace Modules\ProductModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\ProductModule\Repository\CatRepository;
use Modules\ProductModule\Http\Requests\CategoryRequest;
use Modules\ProductModule\Http\Requests\CategoryUpdateRequest;

class CategoryController extends Controller
{
    use CatRepository;

    public function index()
    {
        $configCategories = $this->getAllCategories();
        return $configCategories;
    }

    public function subCategories()
    {
        $configCategories = $this->getAllSubCategories();
        return $configCategories;
    }

    public function store(CategoryRequest $request)
    {
        $createCategory = $this->CreateCategory($request->all());
        return $createCategory;
    }

   
    public function show($id)
    {
        $category = $this->showCategory($id);
        return $category;
    }


    public function update(CategoryUpdateRequest $request, $id)
    {
        $updateCategory = $this->UpdateCategory($request->except('_method'),$id);
        return $updateCategory;
    }

   
    public function destroy(Request $request,$id)
    {
        $deleteCategory = $this->deleteCategory($request->except('_method'));
        return $deleteCategory;
        
    }
}