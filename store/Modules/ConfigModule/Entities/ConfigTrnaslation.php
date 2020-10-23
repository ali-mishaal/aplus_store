<?php

namespace Modules\ConfigModule\Entities;

use Illuminate\Database\Eloquent\Model;

class ConfigTrnaslation extends Model
{
    protected $table = 'config_translations';
    protected $fillable = ['name','description'];
    public $timestamps = false;

    
}
