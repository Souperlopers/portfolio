<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    public function projects()
    {
        return $this->hasMany(Project::class);
    }

    public function tags()
    {
        return $this->morphMany(Tag::class, "tagable");
    }
}
