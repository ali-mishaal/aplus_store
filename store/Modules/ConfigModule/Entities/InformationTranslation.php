<?php

namespace Modules\ConfigModule\Entities;

use Illuminate\Database\Eloquent\Model;

class InformationTranslation extends Model
{
    protected $table = 'information_translations';
    protected $fillable = ['name','description'];
    public $timestamps = false;
}
