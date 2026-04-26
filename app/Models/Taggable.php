<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Taggable extends Model
{
    protected $fillable = [
        'tag_id',
        'taggable_type',
        'taggable_id',
    ];

    public function members()
    {
        return $this->morphedByMany(Member::class, 'taggable');
    }

    public function projects()
    {
        return $this->morphedByMany(Project::class, 'taggable');
    }
}
