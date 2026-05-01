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
                ? ($project ?? $member)->tags()->paginate(10)
                : (new Tag())->getSorted()->paginate(10)
        );
    }
}
