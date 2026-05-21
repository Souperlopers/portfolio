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
                : (new Member())->sort()
            )->get()
        );
    }

    /**
     * Display the member.
     */
    public function show(Member $member)
    {
        return new MemberResource(
            $member
                ->load(['tags', 'projects'])
                ->appendContribution()
        );
    }
}
