import React from "react";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";

function PostList({ posts }) {
  return (
    <>
      {posts.map((post, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
        >
          <Card className="post-card">
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.content}</Card.Text>
            </Card.Body>
          </Card>
        </motion.div>
      ))}
    </>
  );
}

export default PostList;