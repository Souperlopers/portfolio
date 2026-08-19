<?php

namespace App\Http\Resources\Tag;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TagResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
		$pattern = '/(?<title>.*)\.(?:[^\.]+)/';
		preg_match($pattern, $this->name, $matches);

		$base = [
			'id' => $this->id,
			'title' => $matches['title'],
			'path' => '/assets/images/tags/' . ($this->alt_file ?? $this->name),
		];

        foreach (
            [
                'type',
                'version',
            ] as $res_key => $db_key
        ) {
			if($value = $this->{$db_key})
				$base[is_string($res_key) ? $res_key : $db_key] = $value;
        };

        return $base;
    }
}
