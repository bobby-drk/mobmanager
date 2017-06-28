<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class ReportTest extends TestCase
{
    use DatabaseMigrations;

    /** @test */
    public function get_mod_data_with_valid_slug()
    {
        $this->disableProtectionHandling();
        //Arrange
        $mob_data = factory(\App\Models\Mob::class)->create();

        //Act
        echo 'report/' . $mob_data->slug;
        $response = $this->json('get', 'report/' . $mob_data->slug);

        //Assert
        $response->assertStatus(200);
        $response->assertViewHas("slug", $mob_data->slug);
        $response->assertViewHas("name", $mob_data->name);

    }
}
