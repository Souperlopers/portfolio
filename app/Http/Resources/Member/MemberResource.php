<?php

namespace App\Http\Resources\Member;

use App\Http\Resources\Project\ProjectCollection;
use App\Http\Resources\Tag\TagCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MemberResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'position' => $this->position,
            'discription' => $this->discription,
            'thumbnail' => $this->thumbnail,
            'phone' => $this->phone,
            'email' => $this->email,
            'linkedin' => $this->linkedin_url,
            'github' => $this->github_url,
            'contributions' => new ProjectCollection($this->whenLoaded('projects')),
            'skills' => new TagCollection($this->whenLoaded('tags')),
        ];
    }
}
