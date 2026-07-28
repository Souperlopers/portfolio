<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Schema;
use Inertia\Inertia;
use Inertia\ExceptionResponse;

class AppServiceProvider extends ServiceProvider
{
	/**
	 * Register any application services.
	 */
	public function register(): void
	{
		// limit database string length
		Schema::defaultStringLength(191);
	}

	/**
	 * Bootstrap any application services.
	 */
	public function boot(): void
	{
		Inertia::handleExceptionsUsing(function (ExceptionResponse $response) {
			if (in_array($response->statusCode(), [403, 404, 500, 503])) {
				return $response->render('ErrorPage', [
					'status' => $response->statusCode(),
				])->withSharedData();
			}
		});
	}
}
