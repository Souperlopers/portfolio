projects:
<ul class="projects">
	@foreach ($projects as $project)
		<li>name: <a href="/projects/{{ $project->slug }}">{{ $project->name }}</a></li>
	@endforeach
</ul>
