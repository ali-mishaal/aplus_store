<?php

namespace Modules\ConfigModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;

use Modules\ConfigModule\Entities\ConfigCategoryTrnaslate;

class ConfigCategory extends Model implements TranslatableContract
{
    protected $fillable = [];

    use Translatable;
    public $translatedAttributes = ['title'];
    public $translationModel = ConfigCategoryTrnaslation::class;

    
}
