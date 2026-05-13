<?php

namespace App\Http\Resources\Tag;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'title' => $this->name,
            'type' => $this->type,
            'version' => $this->version,

            // for debug
            // 'priority' => (int) isset($this->pivot->priority_for_taggable)
            //     ? $this->pivot->priority_for_taggable
            //     : $this->priority,
        ];
    }
}
