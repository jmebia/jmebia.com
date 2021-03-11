<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Helpers\Strings;
use Auth;

class JournalController extends Controller
{

    public function __construct() {
        $this->middleware('auth');
    }

    public function index() {
        $posts = Post::all();
        return view('journal.index', compact('posts'));
    }

    public function show($url) {
        $post = Post::where('post_url', $url)->first();
        return view('journal.show', compact('post'));
    }

    public function create() {
        return view('journal.create');
    }

    public function store(Request $request) {

        $user = Auth::user();
        $url_code = 'P' . date('Ym') . Strings::rand_str(4);

        $post = Post::create([
                'title' => $request->title,
                'meta_title' => $request->title,
                'content' => $request->content,
                'post_url' => $url_code,
                'posted_by' => $user->id,
            ]);

        return redirect()->route('journal.index');
    }

    public function edit($url) {
        $post = Post::where('post_url', $url)->first();
        return view('journal.edit', compact('post'));
    }

    public function update(Request $request, $url) {

        $post = $post = Post::where('post_url', $url)->first();
        $post->title = $request->title;
        $post->content = $request->content;

        return redirect()->route('journal.index');
    }
    
}
