<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
$factory->define(\App\Models\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});


$factory->define(\App\Models\Mob::class, function (Faker\Generator $faker) {

    $jsonObject = [
        "participants" => [
            [
                "name" => $faker->name,
                "contributor" => true,
                "active" => true
            ],
            [
                "name" => $faker->name,
                "contributor" => true,
                "active" => false
            ],
        ],
    ];

    return [
        'name' => $faker->safeColorName . $faker->firstName,
        'data' => json_encode($jsonObject)
    ];
});