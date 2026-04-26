<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    use Taggable;

    protected $fillable = [
        'username',
        'name',
        'description',
        'position',
        'email',
        'phone',
        'linkedin_url',
        'github_url',
    ];

    public function projects()
    {
        return $this->belongsToMany(Project::class);
    }
}
