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
        $base = [
            'name' => $this->name,
            'position' => $this->position,
            'api' => request()->schemeAndHttpHost() . '/api/members/' . $this->slug,
        ];

        foreach (
            [
                'description',
                'banner',
                'phone',
                'email',
                'linkedin' => 'linkedin_url',
                'github' => 'github_url',
                'preview' => 'url',
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

        // append contributions if there are any
        $contributions = new ProjectCollection($this->whenLoaded('projects'));
        if ($contributions->count()) {
            $base['contributions'] = $contributions;
        }

        // append skills if there are any
        $skills = new TagCollection($this->whenLoaded('tags'));
        if ($skills->count()) {
            $base['skills'] = $skills;
        }

        return $base;
    }
}
