import React, { useEffect, useState } from 'react';
import { fetchPosts } from './services/api';
import Header from './components/Header';
import PostTable from './components/PostTable';
import { Container } from '@mui/material';

function App() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getPosts = async () => {
      const posts = await fetchPosts();
      setPosts(posts);
    };
    getPosts();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header searchTerm={searchTerm} handleSearch={handleSearch} />
      <Container className="flex-grow">
        <PostTable posts={filteredPosts} />
      </Container>
    </div>
  );
}

export default App;
