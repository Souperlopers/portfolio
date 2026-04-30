<?php

namespace App\Models;

trait Taggable
{
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable')
            ->withPivot('priority_for_taggable');
    }

    protected static function booted()
    {
        static::deleting(function ($model) {
            // detach polymorphic tags
            $model->tags()->detach();
        });
    }
}
