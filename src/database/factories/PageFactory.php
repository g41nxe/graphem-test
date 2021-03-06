<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Page;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Page::class, function (Faker $faker) {
    return [
        'title' => 'All about ' . $faker->name(),
        'hero_img' => '/images/vancouver1.jpg',
        'content' => [
            'lead' => $faker->text(200),
            'lead_img' =>  '/images/vancouver2.jpg'
        ]
    ];
});
