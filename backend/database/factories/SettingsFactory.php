<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Settings>
 */
class SettingsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "telegramBotToken" => $this->faker->word,
            "chatId" => $this->faker->word,
            "macos_file" => $this->faker->word,
            "windows_file" => $this->faker->word,
        ];
    }
}
