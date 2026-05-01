<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory, Taggable;

    public $timestamps = false;

    public function getSorted()
    {
        return $this
            ::orderByDesc('priority')
            // ->('projectimages')
            ->orderBy('name')
        ;
    }

    public function projectimages()
    {
        return $this->hasMany(Projectimage::class)
            ->orderByDesc('created_at');
    }

    public function members()
    {
        return $this->belongsToMany(Member::class)
            ->withPivot('member_priority_in_project')
            ->orderByDesc('member_priority_in_project')
            ->orderBy('name')
        ;
    }
}
