<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $projects = Project::orderBy('priority', 'desc')
            ->paginate(10);

        return Inertia::render('Projects', [
            'projects' => $projects,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $projectSlug)
    {
        $project = Project::firstWhere('slug', $projectSlug);

        if (! $project) {
            return Inertia::render('NotFound');
        }

        $tagGroups = [];
        foreach ($project->tags as $tag) {
            $tagGroups[$tag['type']][] = $tag;
        }

        return Inertia::render('Project', [
            'project' => $project,
            'tagGroups' => $tagGroups,
        ]);
    }
}
