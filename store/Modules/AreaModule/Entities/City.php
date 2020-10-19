<?php

namespace Modules\AreaModule\Entities;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    use Translatable;
    protected $fillable = ['country_id'];
    public $translatedAttributes = ['name'];
    public $translationModel = CityTranslation::class;
}
