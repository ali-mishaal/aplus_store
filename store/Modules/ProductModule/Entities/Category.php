<?php

namespace Modules\ProductModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Category extends Model implements TranslatableContract
{
    use SoftDeletes;
    protected $fillable = ['parent','image'];
    use Translatable;
    public $translatedAttributes = ['name','description'];
    public $translationModel = CategoryTranslation::class;

    public function sub()
    {
        return $this->belongsTo(Category::class,'parent');
    }
}
