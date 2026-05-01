<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Project extends Model
{
    use HasFactory, Taggable;

    public $timestamps = false;

    protected $fillable = [
        'name',
        'url',
        'description',
    ];

    public function getSorted()
    {
        return $this
            ::orderByDesc('priority')
            // ->('projectimages')
            ->orderBy('name')
        ;
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
