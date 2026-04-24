<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public function members()
    {
        return $this->hasMany(Member::class);
    }

    public function tags()
    {
        return $this->morphMany(Tag::class, "tagable");
    }
}
