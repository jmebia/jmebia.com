<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Category;
use App\Helpers\Strings;
use Auth;

class JournalController extends Controller
{

    public function __construct() {
        $this->middleware('auth');
    }

    public function index() {
        $user = Auth::user();
        $posts = Post::select('categories.name AS category', 'posts.*', 'users.name AS username')->where([
            ['posts.deleted_at', null],
            ['posted_by', $user->id]])
            ->join('categories', 'categories.id', '=', 'posts.category_id')
            ->join('users', 'users.id', '=', 'posts.posted_by')
            ->orderBy('posts.created_at', 'desc')->paginate(10);
        return view('journal.index', compact('posts'));
    }

    public function show($url) {
        $post = Post::where('post_url', $url)->first();
        return view('journal.show', compact('post'));
    }

    public function create() {
        $categories = Category::all();

        return view('journal.create', compact('categories'));
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
                'category_id' => $request->category,
                'description' => $request->description
            ]);

        return redirect()->route('journal.index');
    }

    public function edit($url) {
        $user = Auth::user();
        $post = Post::where([
            ['post_url', $url],
            ['posted_by', $user->id],
        ])->first();

        return view('journal.edit', compact('post'));
    }

    public function update($id, Request $request) {
        $user = Auth::user();
        $post = Post::findOrFail($id);

        if ($post->posted_by == $user->id) {
            $post->title = $request->title;
            $post->description = $request->description;
            $post->content = $request->content;
            $post->save();
        }

        $url = $post->post_url;

        if ($request->action == 'view') {
            return redirect()->route('journal.show', ['url' => $url]);

        }
        
        return redirect()->route('journal.index');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);

        $psot->delete();
    }
    
}
