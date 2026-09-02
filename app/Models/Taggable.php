<?php

namespace App\Models;

trait Taggable
{
	public function tags()
	{
		return $this->morphToMany(Tag::class, 'taggable')
			->withPivot('priority_for_taggable')
			->orderByPivot('priority_for_taggable', 'desc')
		;
	}

	public function appendContribution()
	{
		$this
			->{$this instanceof Member ? 'projects' : 'members'}
			->each(function ($tgbl) {
				$tgbl = $tgbl->load('tags');
				$tgbl->tags = $tgbl->pivot->tags->where('pivot.priority_for_taggable', '>', 64);
			});

		return $this;
	}

	protected static function booted()
	{
		static::deleting(function ($model) {
			// detach polymorphic tags
			$model->tags()->detach();
		});
	}
}
