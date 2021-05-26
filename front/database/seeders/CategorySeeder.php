<?php

namespace Database\Seeders;

use DB;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'name' => 'Blog',
                'description' => 'General blog post',
            ],
            [
                'name' => 'CS/IT',
                'description' => 'Computers science and information technology related post',
            ],
            [
                'name' => 'Education',
                'description' => 'General educational post',
            ],
            [
                'name' => 'Video Games',
                'description' => 'Video games related post',
            ],
            [
                'name' => 'Arts and Crafts',
                'description' => 'Video games related post',
            ],
        ]);
    }
}
