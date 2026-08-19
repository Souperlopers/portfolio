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
        $base = [
            'id' => $this->slug,
            'title' => $this->name,
            'url' => request()->schemeAndHttpHost() . '/projects/' . $this->slug,
        ];

		// append description if there is any
		if ($this->short_description) {
			$base['description'] = $this->short_description;
		}

        // append thumbnail if there is any
        if ($this->thumbnail) {
            $base['thumbnail'] = request()->schemeAndHttpHost() .'/assets/images/projects/thumbnails/'. $this->thumbnail;
        }

        // append techs if there are any
        $techs = new TagCollection($this->whenLoaded('tags'));
        if ($techs->count()) {
            $base['technologies'] = $techs;
        }

        return $base;
    }
}
