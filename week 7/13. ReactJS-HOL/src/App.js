import React, { useState } from 'react';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [view, setView] = useState("book");
  let component;
  if (view === "book") {
    component = <BookDetails />;
  } else if (view === "blog") {
    component = <BlogDetails />;
  } else {
    component = <CourseDetails />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>


      <button onClick={() => setView("book")}>Book Details</button>{' '}
      <button onClick={() => setView("blog")}>Blog Details</button>{' '}
      <button onClick={() => setView("course")}>Course Details</button>

      <hr />

      {component}

      <hr />
      <div>
        {view === "book" ? <p>Currently viewing: Books</p> : view === "blog" ? <p>Currently viewing: Blogs</p> : <p>Currently viewing: Courses</p>}
      </div>

      {view === "book" && <p>You chose Book Details using && operator</p>}
    </div>
  );
}

export default App;