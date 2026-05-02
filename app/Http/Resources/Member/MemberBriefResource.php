<?php

namespace App\Http\Resources\Member;

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
            'id' => (int) $this->id,
            'name' => $this->name,
            'position' => $this->position,
            'thumbnail' => request()->schemeAndHttpHost() .  $this->thumbnail,
            'url' => request()->schemeAndHttpHost() . '/' . $this->slug,
            'priority' => (int) isset($this->pivot->member_priority_in_project)
                ? $this->pivot->member_priority_in_project
                : $this->priority,
        ];
    }
}
