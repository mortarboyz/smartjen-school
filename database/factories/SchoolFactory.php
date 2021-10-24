<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use App\Models\School;
use Illuminate\Database\Eloquent\Factories\Factory;

class SchoolFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = School::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $schoolName = $this->faker->words(3, true);
        return [
            'schoolId' => str_replace(' ', '-', Str::lower($schoolName)),
            'schoolName' => $schoolName
        ];
    }
}
