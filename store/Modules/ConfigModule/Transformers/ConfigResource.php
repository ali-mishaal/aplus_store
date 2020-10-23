<?php

namespace Modules\ConfigModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class ConfigResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request
     * @return array
     */
    public function toArray($request)
    {
        return 
        [
            'id'=>$this->id,
            'name'=>$this->name,
            'key'=>$this->key
        ];
    }
}
