

<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            New Journal Entry
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <form method="POST" action="{{ route('journal.store') }}">
                        @csrf
                        
                        <div class="mb-4">
                            <label class="text-xl text-gray-600">Title <span class="text-red-500">*</span></label></br>
                            <input type="text" class="border-gray-400 w-full" name="title" id="title" required></input>
                        </div>

                        <div class="mb-4">
                            <label class="text-xl text-gray-600">Description</label></br>
                            <input type="text" class="border-gray-400 w-full" name="description" placeholder="(Optional)" id="description"></input>
                        </div>

                        <div class="mb-4">
                            <label class="text-xl text-gray-600">Content <span class="text-red-500">*</span></label></br>
                            <textarea name="content" class="border-gray-400"></textarea>
                        </div>

                        @isset($categories)
                        <div class="mb-8">
                            <label class="text-xl text-gray-600">Category <span class="text-red-500">*</span></label></br>
                            <select class="border-gray-400" name="category" required>
                                <option value="">-Select Category-</option>
                                @foreach($categories as $cat)
                                <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        @endif

                        <button role="submit" class="p-3 bg-blue-500 text-white hover:bg-blue-400" required>Create Post</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>

@section('scripts')
<script src="{{ asset('ckeditor/ckeditor.js') }}"></script>

<script>
    CKEDITOR.replace( 'content' );
</script>

@show