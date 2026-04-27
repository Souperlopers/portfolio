<!DOCTYPE html>
<html lang="@yield('lang', 'en')">

<head>
	<meta charset="@yield('charset', 'UTF-8')">
	<meta content="width=device-width, initial-scale=1.0" name="viewport">
	<title>@yield('title', 'Souperlopers')</title>
	@vite('resources/css/app.css')
	@stack('styles')
	@stack('preload-scripts')
</head>

@stack('inline-styles')

<body>
	@yield('body')
</body>

@stack('scripts')

</html>
