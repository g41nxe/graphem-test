<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $casts = [
        'content' => 'array',
    ];

    protected $fillable = [
        'title',
        'content',
        'hero_image',
    ];
}
