<?php

namespace Modules\ConfigModule\Entities;

use Illuminate\Database\Eloquent\Model;

class ServiceTranslation extends Model
{
    protected $table = 'service_translations';
    protected $fillable = ['name','description'];
    public $timestamps = false;
}
