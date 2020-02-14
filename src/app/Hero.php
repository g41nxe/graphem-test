<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hero extends Model
{
    protected $fillable = [
        'name',
        'hit_points',
        'attack',
        'side',
        'special_ability',
    ];
}
