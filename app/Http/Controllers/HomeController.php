<?php

namespace App\Http\Controllers;

use App\Models\Member;
use App\Models\Project;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function __invoke()
    {
        $topMembers = Member::orderBy('priority', 'desc')->limit(3)->get();
        $topProjects = Project::orderBy('priority', 'desc')->limit(3)->get();

        return Inertia::render('Home', [
            'members' => $topMembers,
            'projects' => $topProjects,
        ]);
    }
}
