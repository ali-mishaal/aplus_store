<?php

namespace Modules\ProductModule\Entities;

use Illuminate\Database\Eloquent\Model;

class ProductAttribute extends Model
{
    protected $fillable = ['product_id','attribute_id','value'];

    public function attribute()
    {
        return $this->belongsTo(Attribute::class,'attribute_id');
    }
}
