<?php

namespace Modules\ProductModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;
use Modules\ProductModule\Transformers\ProductAttributeResource;

class ProductResource extends JsonResource
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
            'category'=>$this->category->name??'',
            'measurement'=>$this->measurement->name??'',
            'name'=>$this->name??'',
            'description'=>$this->description??'',
            'model'=>$this->model??'',
            'quantity'=>$this->quantity??'',
            'attribute'=>ProductAttributeResource::collection($this->attributes),
             'image'=>asset('/files/product/'.$this->image),
        ];
    }
}
