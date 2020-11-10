<?php

namespace Modules\ProductModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\SoftDeletes;

class Product extends Model implements TranslatableContract
{
    use SoftDeletes;
    protected $fillable = ['category_id','measurement_id','quantity','model','image','imgs'];
    use Translatable;
    public $translatedAttributes = ['name','description'];
    public $translationModel = ProductTranslation::class;

    public function category()
    {
        return $this->belongsTo(Category::class,'category_id');
    }

    public function measurement()
    {
        return $this->belongsTo(Measurement::class,'measurement_id');
    }

    public function attributes()
    {
        return $this->hasMany(ProductAttribute::class);
    }
}
