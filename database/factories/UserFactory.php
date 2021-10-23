<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'username' => $this->faker->userName(),
            'email' => $this->faker->email(),
            'roleId' => $this->faker->numberBetween(1, 2),
            'schoolId' => $this->faker->numberBetween(1, 2),
            'password' => Hash::make(12345678)
        ];
    }
}
