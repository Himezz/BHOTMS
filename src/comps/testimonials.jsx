import React, { useState, useEffect } from "react";
import TestimonialsContent from "./testimonialsContent";

const Testimonials = () => {
  const slides = [
    {
      name: "Alexis Wilson",
      testimonial:
        "Had a great experience held the event for my mom she was so very pleased.. the staff that hosted the event was very professional and supportive in making sure everything went smoothly.. I could not have picked a better venue customer service was a 10 and execution was a 10. They kept in contact all the way till the event. Every thing was just amazing.",
      stars: 5,
    },
    {
      name: "newslide",
      testimonial:
        "Had a great experience held the event for my mom she was so very pleased.. the staff that hosted the event was very professional and supportive in making sure everything went smoothly.. I could not have picked a better venue customer service was a 10 and execution was a 10. They kept in contact all the way till the event. Every thing was just amazing.",
      stars: 5,
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    setShouldAnimate(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setShouldAnimate(true);
    }, 1000);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % slides.length;
    setShouldAnimate(false);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setShouldAnimate(true);
    }, 1000);
  };

  // Automatically advance to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide,100000000000000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div> 

      <TestimonialsContent
        name={slides[currentIndex].name}
        testimonial={slides[currentIndex].testimonial}
        stars={slides[currentIndex].stars}
        leftButton={prevSlide}
        rightButton={nextSlide}
        animate={shouldAnimate}
        animationDirection="right" 
      /> 
   
    </div>
  );
};

export default Testimonials;