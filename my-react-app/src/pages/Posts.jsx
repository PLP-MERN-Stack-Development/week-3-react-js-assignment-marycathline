import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setPosts(data);
        setFiltered(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredData = posts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(filteredData);
    setPage(1);
  }, [search, posts]);

  const start = (page - 1) * postsPerPage;
  const currentPosts = filtered.slice(start, start + postsPerPage);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Posts</h2>

      <input
        type="text"
        placeholder="Search posts by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border px-3 py-2 mb-4 w-full rounded dark:bg-gray-800 dark:text-white dark:border-gray-600"
      />

      {loading && <p className="text-gray-600 dark:text-gray-300">Loading...</p>}
      {error && <p className="text-red-600 dark:text-red-400">{error}</p>}

      <div className="grid gap-4">
        {currentPosts.map(post => (
          <div key={post.id} className="p-4 border rounded shadow dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-lg">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage(p => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 dark:bg-gray-700 dark:text-white"
        >
          Prev
        </button>
        <span className="text-gray-700 dark:text-gray-300">Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage(p => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 dark:bg-gray-700 dark:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
