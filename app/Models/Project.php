<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory, Taggable;

    public $timestamps = false;

    public function sort()
    {
        return $this
            ::orderByDesc('priority')
            ->orderBy('name')
            ->with(['tags' => fn($q) => $q->where('priority_for_taggable', '>', 64)])
        ;
    }

    public function images()
    {
        return $this->hasMany(Projectimage::class)
            ->orderByDesc('created_at')
        ;
    }

    public function members()
    {
        return $this->belongsToMany(Member::class)
            ->using(MemberProject::class)
            ->withPivot('id', 'member_priority_in_project')
            ->orderByDesc('member_priority_in_project')
            ->orderBy('name')
        ;
    }
}
