@extends('layouts.main')

@section('title', 'Souperlopers | {{ $project->name }}')

@section('body')
	<h1>Project</h1>
	<div class="name"> name: {{ $project->name }} </div>
	<div class="description">description: {{ $project->description }}</div>

	Technologies: @include('components.tags', ['tagGroups' => $tagGroups])

	@include('components.members', ['members' => $project->members])

	<div>preview: <a href="{{ $project->url }}">{{ $project->url }}</a></div>
@endsection
