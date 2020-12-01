<?php

namespace Modules\UiModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    public function toArray($request)
    {
        return 
        [
            'id'=>$this->id,
            'name'=>$this->name,
            'quantity'=>$request->quantity,
            'image'=>asset('/files/product/'.$this->image),
        ];
    }
}
