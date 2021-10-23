<?php

namespace Database\Seeders;

use App\Models\School;
use Database\Factories\SchoolFactory;
use Illuminate\Database\Seeder;

class SchoolSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        School::factory()->count(2)->create();
    }
}
