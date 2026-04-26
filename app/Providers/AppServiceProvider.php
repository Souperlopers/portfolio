<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Eloquent\Relations\Relation;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // replacing type syntax with shorted names in morph relations
        Relation::enforceMorphMap([
            'member' => 'App\Models\Member',
            'project' => 'App\Models\Projects',
        ]);
    }
}
