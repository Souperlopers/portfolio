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
        $base = [
            'id' => $this->id,
            'title' => $this->name,

            // for debug
            // 'priority' => (int) isset($this->pivot->priority_for_taggable)
            //     ? $this->pivot->priority_for_taggable
            //     : $this->priority,
        ];

        foreach (
            [
                'type',
                'version',
            ] as $key => $value
        ) {
            $base[is_string($key) ? $key : $value] = $this->{$value};
        };

        return $base;
    }
}
