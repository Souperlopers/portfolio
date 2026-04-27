<?php

namespace App\Http\Controllers;

use App\Models\Project;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::all();

        return view("pages.projects")
            ->with("projects", $projects);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $projectSlug)
    {
        $project = Project::firstWhere('slug', $projectSlug);

        if (!$project) {
            return view('pages.404');
        }

        $tagGroups = [];
        foreach ($project->tags as $tag) {
            $tagGroups[$tag['type']][] = $tag;
        }

        return view("pages.project")
            ->with("project", $project)
            ->with("tagGroups", $tagGroups);
    }
}
