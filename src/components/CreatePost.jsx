import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";

function CreatePost({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    addPost({ title, content });

    setTitle("");
    setContent("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Card className="create-card mb-4">
        <Card.Body>

          <h4>Create Post</h4>

          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Write your post..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button type="submit" className="publish-btn">
                Publish
              </Button>
            </motion.div>

          </Form>

        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default CreatePost;