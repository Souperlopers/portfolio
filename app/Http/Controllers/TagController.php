<?php

namespace App\Http\Controllers;

use App\Http\Resources\Tag\TagCollection;
use App\Models\Member;
use App\Models\Project;
use App\Models\Tag;

class TagController extends Controller
{
    public function __invoke(?Project $project = null, ?Member $member = null)
    {
        return new TagCollection(
            isset($project) || isset($member)
                ? (($project ?? $member)
                    ->tags()
                    ->orderByPivot('priority_for_taggable', 'desc')
                    ->paginate(10))
                : (Tag
                    ::orderByDesc('priority')
                    ->paginate(10))
        );
    }
}
