<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Member extends Model
{
    use HasFactory, Taggable;

    public $timestamps = false;

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
