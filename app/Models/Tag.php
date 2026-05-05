<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tag extends Model
{
    use HasFactory;

    public $timestamps = false;

    public const TYPES = ['os', 'lang', 'framework', 'lib', 'webserver', 'db', 'tool'];

    public function getSorted()
    {
        return $this::orderByDesc('priority');
    }

    // casacade on delete
    protected static function booted()
    {
        static::deleting(function ($tag) {
            $tag->morphedByMany(Member::class, 'taggable')->detach();
            $tag->morphedByMany(Project::class, 'taggable')->detach();
        });
    }
}
