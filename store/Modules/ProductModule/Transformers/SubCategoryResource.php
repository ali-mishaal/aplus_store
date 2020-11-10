<?php

namespace Modules\ProductModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class SubCategoryResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id'     =>$this->id,
            'name'   =>$this->name,
            'parent' =>$this->sub->name,
            'image'  =>$request->getHttpHost().'/files/category/'.$this->image,
        ];
    }
}
