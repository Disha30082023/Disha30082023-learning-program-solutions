import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 'C1', name: "React Basics", duration: "4 Weeks" },
    { id: 'C2', name: "Advanced React", duration: "6 Weeks" }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <strong>{course.name}</strong> - {course.duration}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;