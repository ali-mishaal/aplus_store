<?php

namespace Modules\ProductModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class SingleResource extends JsonResource
{
    
    public function toArray($request)
    {
        return 
        [
            'id'=>$this->id,
            'namear'=>$this->translate('ar')->name,
            'nameen'=>$this->translate('en')->name,
            'parent'=>$this->sub->name??'',
            'image'=>$request->getHttpHost().'/files/category/'.$this->image
        ];
    }
}
