<?php

namespace Modules\ConfigModule\Transformers;

use Illuminate\Http\Resources\Json\JsonResource;

class CareerResouece extends JsonResource
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
            'namear'=>$this->translate('ar')->name,
            'nameen'=>$this->translate('en')->name,
            'descriptionar'=>$this->translate('ar')->description,
            'descriptionen'=>$this->translate('en')->description,
            'image'=>asset('/files/general/'.$this->image),
            'cv'=>asset('/files/general/'.$this->cv)
        ];
    }
}
