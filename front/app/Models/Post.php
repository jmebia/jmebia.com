<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $dates = ['deleted_at'];
    const DELETED_AT = 'deleted_at';

    protected $fillable = ['title', 'meta_title', 'post_url', 'content', 'posted_by', 'parent_post_id', 'description', 'category_id'];

    

}


