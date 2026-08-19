<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tag extends Model
{
	use HasFactory, HasUlids;

	public $timestamps = false;

	public const TYPES = ['os', 'lang', 'framework', 'lib', 'webserver', 'db', 'tool']; // change frontend types if modified
	public const NAMES = [
		'Axios.svg',
		'CSS.svg',
		'Daisy UI.svg',
		'InertiaJS.svg',
		'ViteJS.svg',
		'React Router.svg',
		'Framer.svg',
		'Javascript.svg',
		'Laravel.svg',
		'NextJS.svg',
		'PHP.svg',
		'ReactJS.svg',
		'React Query.svg',
		'TailwindCSS.svg',
		'Tanstack.svg',
		'Typescript.svg',
		"Redux.svg",
		"REST API.svg",
		"React Toastify.webp"
	]; // change frontend types if modified

	public function sort()
	{
		return $this::orderByDesc('priority');
	}

	// casacade on delete
	protected static function booted()
	{
		static::deleting(function ($tag) {
			$tag->morphedByMany(Member::class, 'taggable')->detach();
			$tag->morphedByMany(Project::class, 'taggable')->detach();
			$tag->morphedByMany(MemberProject::class, 'taggable')->detach();
		});
	}
}
