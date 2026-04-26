<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Tag extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $fillable = [
        'type',
        'name',
        'version',
        'taggable_type',
        'taggable_id',
    ];

    public const TYPES = ["os", "lang", "framework", "lib", "webserver", "db", "tool"];

    public function members()
    {
        return $this->morphedByMany(Member::class, 'taggable');
    }

    public function projects()
    {
        return $this->morphedByMany(Project::class, 'taggable');
    }
}
