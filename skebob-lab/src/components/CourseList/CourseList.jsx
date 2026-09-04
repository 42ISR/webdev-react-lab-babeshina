import './CourseList.css';
import CourseCard from '../CourseCard/CourseCard.jsx';

function CourseList({ courses }) {
  return (
    <section className="courses">
      <div className="container">
        <h2 className="section-title">Курсикиии</h2>
        <div className="courses__grid">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CourseList;