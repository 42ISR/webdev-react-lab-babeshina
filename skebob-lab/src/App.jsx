import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CourseList from './components/CourseList/CourseList';
import TestimonialList from './components/TestimonialList/TestimonialList';
import Footer from './components/Footer/Footer';

// Импортируем данные
import { courses } from './data/courses.jsx';
import { reviews } from './data/reviews.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <CourseList courses={courses} />
      <TestimonialList reviews={reviews} />
      <Footer />
    </div>
  );
}

export default App;