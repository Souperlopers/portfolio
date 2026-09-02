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
		$base = [
			'id' => $this->slug,
			'name' => $this->name,
			'position' => $this->position,
			'url' => request()->schemeAndHttpHost() . '/' . $this->slug,
		];

		// append thumbnail if there is any
		if ($t = $this->thumbnail) {
			$base['thumbnail'] = request()->schemeAndHttpHost() . '/assets/images/members/' .  $t;
		}

		// append skills if there are any
		$skills = new TagCollection($this->whenLoaded('tags'));
		if ($skills->count()) {
			$base['skills'] = $skills;
		}

		return $base;
	}
}
