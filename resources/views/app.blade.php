<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/favicon.ico" />
    <link rel="preload" href="/assets/fonts/Vazirmatn-Regular.woff2" as="font" type="font/woff2" crossorigin />
    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    @routes
    @viteReactRefresh
    @vite('resources/js/app.tsx')
    <x-inertia::head />
</head>

<body dir="rtl" class="overflow-y-scroll min-h-screen font-vazir bg-base-300">
    <x-inertia::app />
</body>

</html>
