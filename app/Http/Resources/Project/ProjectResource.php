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
			'api' => request()->schemeAndHttpHost() . '/api/projects/' . $this->slug,
		];

		foreach (
			[
				'پیش‌نمایش' => 'url',
				'گیت‌هاب' => 'github',
				'فیگما' => 'figma',
			] as $key => $value
		) {
			$base['links'][$key] = $this->{$value};
		};

		// append description if there is any
		if ($this->description) {
			$base['description'] = $this->description;
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

		// append images if there are any
		$images = new ProjectImageCollection($this->whenLoaded('images'));
		if ($images->count()) {
			$base['images'] = $images;
		}

		// append contribs if there are any
		$contribs = new MemberCollection($this->whenLoaded('members'));
		if ($contribs->count()) {
			$base['contributors'] = $contribs;
		}

		return $base;
	}
}
