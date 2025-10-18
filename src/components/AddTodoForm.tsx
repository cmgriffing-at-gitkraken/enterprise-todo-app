// src/components/AddTodoForm.tsx
export default function AddTodoForm() {
  return (
    <form className="max-w-md mx-auto p-4 border border-primary-300 rounded-lg">
      <div className="mb-4">
        <label htmlFor="title" className="block text-white mb-2">Title</label>
        <input type="text" id="title" name="title" className="w-full p-2 rounded bg-gray-800 text-white border border-primary-500 focus:outline-none focus:border-primary-400" />
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block text-white mb-2">Description</label>
        <textarea id="description" name="description" className="w-full p-2 rounded bg-gray-800 text-white border border-primary-500 focus:outline-none focus:border-primary-400" />
      </div>
      <button type="submit" className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
        Add Todo
      </button>
    </form>
  );
}