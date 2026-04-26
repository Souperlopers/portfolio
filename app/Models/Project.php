<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use Taggable;

    protected $fillable = [
        'name',
        'url',
        'description',
    ];

    public function members()
    {
        return $this->belongsToMany(Member::class);
    }
}
