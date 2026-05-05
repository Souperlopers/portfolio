<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class MemberProject extends Pivot
{
    use Taggable;

    public $timestamps = false;

    public static function getRecord(Member $member, Project $project)
    {
        return static::query()->where('member_id', $member->id)->where('project_id', $project->id)->firstOrFail();
    }
}
