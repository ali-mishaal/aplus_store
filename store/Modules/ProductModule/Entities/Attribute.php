<?php

namespace Modules\ProductModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Attribute extends Model implements TranslatableContract
{
    use SoftDeletes;
    use Translatable;
    protected $table = 'attributes';
    public $translatedAttributes = ['name'];
    public $translationModel = AttributeTranslation::class;

}
