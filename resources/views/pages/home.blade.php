@extends('layouts.main')

@section('title', 'Souperlopers')

@section('body')
	<h1 class="bg-red-600 text-3xl font-bold underline">Banner</h1>
	<h1><a href="/projects">Projects</a></h1>
	@foreach ($projects as $project)
		{{ $project }}<br><br>
	@endforeach
	<br><br><br>
	<h1><a href="/members">Members</a></h1>
	@foreach ($members as $member)
		{{ $member }}<br><br>
	@endforeach
	<br><br><br>
	<h1>Reviews</h1>
	<h1>Contact</h1>
@endsection
