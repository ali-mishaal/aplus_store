<?php

namespace Modules\ProductModule\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class MeasurementTranslation extends Model
{
    use SoftDeletes;
    protected $table = 'measurement_translations';
    protected $fillable = ['name'];
    public $timestamps = false;
}
