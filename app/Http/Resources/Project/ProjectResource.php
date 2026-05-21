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
        $base = [
            'title' => $this->name,
            'url' => request()->schemeAndHttpHost() . '/projects/' . $this->slug,
        ];

        foreach (
            [
                'description',
                'preview' => 'url',
                'github',
                'figma',
            ] as $key => $value
        ) {
            if($data = $this->{$value}){
                $base[is_string($key) ? $key : $value] = $data;
            }
        };

        // append thumbnail if there is any
        if ($this->thumbnail) {
            $base['thumbnail'] = request()->schemeAndHttpHost() . $this->thumbnail;
        }

        // append techs if there are any
        $techs = new TagCollection($this->whenLoaded('tags'));
        if ($techs->count()) {
            $base['technologies'] = $techs;
        }

        // append images if there are any
        $images = new TagCollection($this->whenLoaded('images'));
        if ($images->count()) {
            $base['images'] = $images;
        }

        // append contribs if there are any
        $contribs = new TagCollection($this->whenLoaded('members'));
        if ($contribs->count()) {
            $base['contributors'] = $contribs;
        }

        return $base;
    }
}
