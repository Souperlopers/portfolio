<?php

namespace App\Http\Resources\Project;

use App\Http\Resources\Member\MemberCollection;
use App\Http\Resources\Project\Image\ProjectImageCollection;
use App\Http\Resources\Tag\TagCollection;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'title' => $this->name,
            'description' => $this->description,
            'thumbnail' => request()->schemeAndHttpHost() .  $this->thumbnail,
            'contributors' => new MemberCollection($this->whenLoaded('members')),
            'technologies' => new TagCollection($this->whenLoaded('tags')),
            'images' => new ProjectImageCollection($this->whenLoaded('images')),
            'links' => [
                'preview' => $this->url,
                'github' => $this->github,
                'figma' => $this->figma,
            ],
        ];
    }
}
