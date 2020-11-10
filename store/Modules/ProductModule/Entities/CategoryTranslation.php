<?php

namespace Modules\ProductModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class CategoryTranslation extends Model
{
    use SoftDeletes;
    protected $table = 'category_translations';
    protected $fillable = ['name','description'];
    public $timestamps = false;
}
