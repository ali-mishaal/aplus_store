<?php

namespace Modules\ConfigModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;

use Modules\ConfigModule\Entities\ConfigTrnaslation;

class Config extends Model implements TranslatableContract
{
    protected $fillable = ['config_category_id','type','key','sort','image'];
    use Translatable;
    public $translatedAttributes = ['name','description'];
    public $translationModel = ConfigTrnaslation::class;
}
