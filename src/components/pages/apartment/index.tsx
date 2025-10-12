import {
  AnimatedTestimonials,
  Testimonial,
} from "@/components/ui/animated-testimonials";

const list: Testimonial[] = [
  {
    quote:
      "Чудове місце для відпочинку з родиною. Відмінний сервіс і комфортні умови.",
    name: "Олександр Іванов",
    designation: "Київ, Україна",
    src: "/images/apartment1/1.jpg",
  },
  {
    quote:
      "Чудове місце для відпочинку з родиною. Відмінний сервіс і комфортні умови.",
    name: "Олександр Іванов",
    designation: "Київ, Україна",
    src: "/images/apartment1/2.jpg",
  },
  {
    quote:
      "Чудове місце для відпочинку з родиною. Відмінний сервіс і комфортні умови.",
    name: "Олександр Іванов",
    designation: "Київ, Україна",
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
