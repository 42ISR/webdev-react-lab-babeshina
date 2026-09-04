import './TestimonialList.css';
import ReviewCard from '../ReviewCard/ReviewCard.jsx';

function TestimonialList({ reviews }) {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">Отзывы студентов</h2>
        <div className="testimonials__grid">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialList;