<?php

namespace Modules\ProductModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class SingleProductResource extends JsonResource
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
            'category'=>$this->category->id??'',
            'measurement'=>$this->measurement->id??'',
            'namear'=>$this->translate('ar')->name,
            'nameen'=>$this->translate('en')->name,
            'descriptionar'=>$this->translate('ar')->description,
            'descriptionen'=>$this->translate('en')->description,
            'model'=>$this->model,
            'quantity'=>$this->quantity,
            'attribute'=>ProductAttributeResource::collection($this->attributes),
            'image'=>asset('/files/product/'.$this->image),
        ];
    }
}
