import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 101, title: "Intro to JSX", date: "2025-06-01" },
    { id: 102, title: "React Lifecycle", date: "2025-06-10" }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> - {blog.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;