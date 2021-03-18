<x-guest-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Journal
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            @auth
                @if(Auth::user()->id == $post->posted_by)
                
                <a href="{{ route('journal.edit', ['url' => $post->post_url]) }}" class="text-blue-500">Edit Post</a>
                <br>
                <a href="{{ route('journal.index') }}" class="text-blue-500">Go to Index</a>
                <hr class="my-2">
                @endif
            @endauth
            <a href="{{route('journal.home')}}" class="text-blue-500">Go back to Journal</a>

            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg mt-6">
                <div class="p-6 bg-white border-b border-gray-200">
                    
                    @isset($post)
                    <div class="block mb-4 p-4">
                    <span class="block text-2xl font-bold uppercase">{{$post->title}}</span>
                    <span class="text-md text-gray-500">posted on {{$post->created_at}}</span>
                    </div>
                    <hr>
                    <div class="mt-4">
                        {!! $post->content !!}
                    </div>
                    @endif
                    
                </div>
            </div>

        </div>
    </div>
</x-guest-layout>

@section('styles')
<style>
/**
 * @desc Simple and Nice Blockquote Styling
 * @see  http://css-tricks.com/snippets/css/simple-and-nice-blockquote-styling/
 */

blockquote {
  background: #e1ecfe;
  border-left: 5px solid #689ff8;
  margin: 1.5em 10px;
  padding: .5em 10px;
  /* quotes: "\201C""\201D""\2018""\2019"; */
}
blockquote:before {
  color: #ccc;
  /* content: open-quote; */
  font-size: 4em;
  line-height: .1em;
  margin-right: .25em;
  vertical-align: -.4em;
}
blockquote p {
  display: inline;
}
</style>

@show