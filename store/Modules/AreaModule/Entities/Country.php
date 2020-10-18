<?php

namespace Modules\AreaModule\Entities;

use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use Translatable;
    protected $fillable = [];
    public $translatedAttributes = ['name'];
    public $translationModel = CountryTranslation::class;
}
