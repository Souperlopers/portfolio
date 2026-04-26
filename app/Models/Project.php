<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory, Taggable;

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
