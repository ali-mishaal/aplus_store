<?php

namespace Modules\ProductModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class AttributeValue extends Model implements TranslatableContract
{
    use SoftDeletes;
    use Translatable;
    protected $fillable=['attribute_id'];
    public $translatedAttributes = ['name'];
    public $translationModel = AttributeValueTranslation::class;

     public function attribute()
    {
        return $this->belongsTo(Attribute::class,'attribute_id');
    }
}
