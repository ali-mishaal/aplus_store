<?php

namespace Modules\ConfigModule\Entities;

use Illuminate\Database\Eloquent\Model;

class CareerTranslation extends Model
{
    protected $table = 'career_translations';
    protected $fillable = ['name','description'];
    public $timestamps = false;
}
