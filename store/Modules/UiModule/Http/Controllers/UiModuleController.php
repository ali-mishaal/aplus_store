<?php

namespace Modules\UiModule\Http\Controllers;

use Illuminate\Contracts\Support\Renderable;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use Modules\UiModule\Repository\HomeRepository;

class UiModuleController extends Controller
{
    use HomeRepository;

    public function __invoke($page)
    {
        dd('fdsf');
    }

    public function getCategories()
    {
        $Categories = $this->getAllCategories();
        return $Categories;
    }

    public function getRandCategories()
    {
        $cats = $this->getRandomCategories();
        return $cats;
    }

    public function get_latest_products()
    {
        return $this->getLatestProducts();
    }

    public function getSlider()
    {
        return $this->getAllSlider();
    }

    public function getLatestNews()
    {
        return $this->getLatestRepoNews();
    }

    public function getLatestInformations()
    {
        return $this->getLatestRepoInformations();
    }

    public function getLatesCareers()
    {
        return $this->getLatesRepoCareers();
    }

    public function getLatestServices()
    {
        return $this->getLatestRepoServices();
    }

}
