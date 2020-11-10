<?php

namespace Modules\ProductModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AttributeTranslation extends Model
{
    use SoftDeletes;
    protected $table = 'attrubute_translations';
    protected $fillable = ['name'];
    public $timestamps = false;
}
