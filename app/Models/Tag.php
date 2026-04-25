<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $fillable = [
        'type',
        'name',
        'version',
        'tagable_type',
        'tagable_id',
    ];

    public const VALUES = ["os", "lang", "framework", "lib", "webserver", "db", "tool"];

    public function tagable()
    {
        return $this->morphTo();
    }
}
