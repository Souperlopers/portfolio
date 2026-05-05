<?php

namespace App\Http\Controllers;

use App\Http\Resources\Tag\TagCollection;
use App\Models\Member;
use App\Models\Project;
use App\Models\Tag;

class TagController extends Controller
{
    public function __invoke(Member|Project $taggable = null)
    {
        return new TagCollection(
            (isset($taggable)
                ? $taggable->tags()
                : (new Tag())->getSorted()
            )->paginate(10)
        );
    }
}
