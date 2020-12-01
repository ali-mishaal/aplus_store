<?php

namespace Modules\ProductModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class ApiProductSimpleResource extends JsonResource
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
                'name'=>$this->name??'',
                'description'=>($this->description)?strip_tags(mb_substr($this->description,0,100)):'',
                'image'=>asset('/files/product/'.$this->image),
            ];
    }
}
