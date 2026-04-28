<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Project;

class HomeController extends Controller
{
    public function __invoke()
    {
        $topMembers = Member::orderBy('priority', 'desc')->limit(3)->get();
        $topProjects = Project::orderBy('priority', 'desc')->limit(3)->get();

        return view("pages.home")
            ->with('members', $topMembers)
            ->with('projects', $topProjects);
    }
}
