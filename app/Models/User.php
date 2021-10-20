<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
class User extends Model
{
    protected $fillable = [
        'username',
        'password',
        'email',
        'roleId',
        'schoolId',
    ];
    protected $hidden = [
        'password',
        'remember_token',
    ];
}
