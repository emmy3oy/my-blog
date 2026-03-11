import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="app-bg">
      <Container className="py-5">

        <motion.h1
          className="blog-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          React Blog
        </motion.h1>

        <CreatePost addPost={addPost} />

        <PostList posts={posts} />

      </Container>
    </div>
  );
}

export default App;