@extends('layouts.main')


@section('title', 'SouperLopers')

@section('body')
	<div class='flex flex-col gap-5'>
	    <div class='border rounded h-54'>
			@include('components.home.banner.banner')
	    </div> 
        <div class='bg-yellow-400 rounded'>
            @include('components.home.projects.projects')
        </div>
	</div>
@endsection
