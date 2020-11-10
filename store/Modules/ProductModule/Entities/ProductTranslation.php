<?php

namespace Modules\ProductModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProductTranslation extends Model
{
    use SoftDeletes;
    protected $table = 'product_translations';
    protected $fillable = ['name','description'];
    public $timestamps = false;
}
