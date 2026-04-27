@extends('layouts.main')

@section('title', 'Souperlopers | Projects')

@section('body')
	<h1>Projects</h1>
	@foreach ($projects as $project)
		<div class="name">
			name:
			<a href="/projects/{{ $project->slug }}">{{ $project->name }}</a>
		</div>
		<br>
	@endforeach
@endsection
