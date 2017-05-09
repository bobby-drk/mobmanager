<?php

namespace Tests\Feature;

use App\Models\Mob;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class MobDataTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function create_mob_datastore_when_passing_valid_data()
    {
        $this->disableProtectionHandling();
        //Arrange
        $mob_data = factory(\App\Models\Mob::class)->make();

        //Act
        $response = $this->json('post', 'api/mob', [
            'name' => $mob_data->name,
            'data' => $mob_data->data,
        ]);

        //Assert
        $response->assertStatus(201);
        $store_data = Mob::where('name', $mob_data->name)->first();
        $this->assertJsonStringEqualsJsonString($mob_data->data, $store_data->data);

    }
}
