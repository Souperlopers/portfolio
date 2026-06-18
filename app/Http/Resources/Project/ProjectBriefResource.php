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

            // for debug
            // 'priority' => (int) isset($this->pivot->project_priority_for_member)
            //     ? $this->pivot->project_priority_for_member
            //     : $this->priority,
        ];

        // append short description
        if ($this->description) {
            $short_desc = explode('. ', $this->description)[0] . '.';
            $base['description'] = $short_desc;
        }

        // append thumbnail if there is any
        if ($this->thumbnail) {
            $base['thumbnail'] = request()->schemeAndHttpHost() . $this->thumbnail;
        }

        // append techs if there are any
        $techs = new TagCollection($this->whenLoaded('tags'));
        if ($techs->count()) {
            $base['technologies'] = $techs;
        }

        return $base;
    }
}
