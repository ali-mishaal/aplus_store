<?php

namespace Modules\ConfigModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class ConfigCategoryResource extends JsonResource
{

    public function toArray($request)
    {
        return 
        [
            'id'=>$this->id,
            'title'=>$this->title
        ];
    }
}
