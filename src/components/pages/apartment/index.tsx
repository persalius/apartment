import {
  AnimatedTestimonials,
  Testimonial,
} from "@/components/ui/animated-testimonials";

const list: Testimonial[] = [
  {
    src: "/images/apartment1/1.jpg",
  },
  {
    src: "/images/apartment1/2.jpg",
  },
  {
    src: "/images/apartment1/3.jpg",
  },
];

const ApartmentPage = () => {
  return (
    <div>
      <AnimatedTestimonials testimonials={list} />
    </div>
  );
};

export default ApartmentPage;
