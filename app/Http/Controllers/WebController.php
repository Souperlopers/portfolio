<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Project;
use Inertia\Inertia;

class WebController extends Controller
{
    public function home()
    {
        return Inertia::render('Home', [
            'members' => (new MemberController)->index(),
            'projects' => (new ProjectController)->index(),
        ]);
    }



    public function project(Project $project)
    {
        return Inertia::render('Project', [
            'project' => (new ProjectController)->show($project)
        ]);
    }



    public function member(Member $member)
    {
        return Inertia::render('Member', [
            'member' => (new MemberController)->show($member)
        ]);
    }
}
