<?php

namespace App\Http\Resources\Project\Image;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectImageResource extends JsonResource
{
	/**
	 * Transform the resource into an array.
	 *
	 * @return array<string, mixed>
	 */
	public function toArray(Request $request): array
	{
		$base = [
			'id' => $this->id,
			'url' => request()->schemeAndHttpHost() . $this->path,
			'description' => $this->description,
		];

		// append description if there is any
		if ($this->description) {
			$base['description'] = $this->description;
		}

		return $base;
	}
}
