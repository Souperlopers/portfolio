<?php

namespace App\Http\Controllers;

use App\Http\Resources\Member\MemberCollection;
use App\Http\Resources\Member\MemberResource;
use App\Models\Member;
use App\Models\Project;

class MemberController extends Controller
{
    /**
     * Display a listing of members
     */
    public function index(?Project $project = null)
    {
        return new MemberCollection(
            ($project
                ? $project->members()
                : (new Member())->getSorted()
            )->paginate(10, pageName: $project ? "memberPage" : 'page')
        );
    }

    /**
     * Display the member.
     */
    public function show(Member $member)
    {
        $member = $member->load([
            'tags' => fn($q) => $q->limit(4),
            'projects' => fn($q) => $q->limit(4)
        ]);

        $member->projects->each(function ($prj) {
            $prj = $prj->load('tags');
            $prj->tags = $prj->pivot->tags->where('pivot.priority_for_taggable', '>', 64);
        });

        return new MemberResource($member);
    }
}
