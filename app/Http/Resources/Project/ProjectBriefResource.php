<?php

namespace App\Http\Resources\Project;

use App\Http\Resources\Tag\TagCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectBriefResource extends JsonResource
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
            'title' => $this->name,
            'thumbnail' => request()->schemeAndHttpHost() .  $this->thumbnail,
            'url' => request()->schemeAndHttpHost() . '/projects/' . $this->slug,
            'technologies' => new TagCollection($this->whenLoaded('tags')),
            'priority' => (int) isset($this->pivot->project_priority_for_member)
                ? $this->pivot->project_priority_for_member
                : $this->priority,
        ];
    }
}
