<?php

namespace Modules\ProductModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    
    public function toArray($request)
    {
        return [
            'id'     =>$this->id,
            'name'   =>$this->name,
            'image'  =>asset('/files/category/'.$this->image)
        ];
    }
}
