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
            $project
                ? (
                    $project->members()
                    ->orderByDesc('member_priority_in_project')
                    ->orderBy('name')
                    ->paginate(10)
                )
                : (
                    Member
                    ::orderByDesc('priority')
                    ->orderBy('name')
                    ->paginate(10, pageName: "memberPage")
                )
        );
    }



    /**
     * Display the member.
     */
    public function show(Member $member)
    {
        return new MemberResource(
            $member->load([
                'projects' => fn($query) => $query
                    ->orderByPivot('project_priority_for_member', 'desc')
                    ->limit(4),
                'tags' => fn($query) => $query
                    ->orderByPivot('priority_for_taggable', 'desc')
                    ->limit(4)
            ])
        );
    }
}
