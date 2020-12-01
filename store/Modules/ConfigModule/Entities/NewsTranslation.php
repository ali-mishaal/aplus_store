<?php

namespace Modules\ConfigModule\Entities;

use Illuminate\Database\Eloquent\Model;

class NewsTranslation extends Model
{
    protected $table = 'news_translations';
    protected $fillable = ['name','description'];
    public $timestamps = false;
}
