<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Member extends Model
{
    use HasFactory, Taggable;

    public $timestamps = false;

    public function getSorted()
    {
        return $this
            ::orderByDesc('priority')
            ->orderBy('name')
            ->with(['tags' => fn($q) => $q->where('priority_for_taggable', '>', 64)])
        ;
    }

    public function projects()
    {
        return $this->belongsToMany(Project::class)
            ->using(MemberProject::class)
            ->withPivot('project_priority_for_member')
            ->orderByPivot('project_priority_for_member', 'desc')
            ->orderBy('name')
            ->with(['tags' => fn($q) => $q->where('priority_for_taggable', '>', 64)])
        ;
    }
}
