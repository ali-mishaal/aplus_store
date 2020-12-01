<?php

namespace Modules\ConfigModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;

use Modules\ConfigModule\Entities\ConfigTrnaslation;

class Career extends Model implements TranslatableContract
{
    protected $fillable = ['image'];
    use Translatable;
    public $translatedAttributes = ['name','description'];
    public $translationModel = CareerTranslation::class;

}
