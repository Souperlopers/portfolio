<?php

namespace App\Http\Resources\Member;

use App\Http\Resources\Tag\TagCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MemberBriefResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->slug,
            'name' => $this->name,
            'position' => $this->position,
            'thumbnail' => request()->schemeAndHttpHost() .  $this->thumbnail,
            'url' => request()->schemeAndHttpHost() . '/' . $this->slug,
            'skills' => new TagCollection($this->whenLoaded('tags')),

            // for debug
            // 'priority' => (int) isset($this->pivot->member_priority_in_project)
            //     ? $this->pivot->member_priority_in_project
            //     : $this->priority,
        ];
    }
}
