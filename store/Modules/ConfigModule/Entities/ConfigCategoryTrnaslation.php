<?php

namespace Modules\ConfigModule\Entities;

use Illuminate\Database\Eloquent\Model;

class ConfigCategoryTrnaslation extends Model
{
    protected $table = 'config_categories_translations';
    protected $fillable = ['title'];
    public $timestamps = false;

    
}
