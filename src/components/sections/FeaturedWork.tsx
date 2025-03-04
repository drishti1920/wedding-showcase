import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  ArrowRight,
  Camera,
  Check,
  ChevronLeft,
  ChevronRight,
  Heart,
  MessageSquare,
} from "lucide-react";
import About from "./About";
import PhotoGrid from "./PhotoGrid";
import { testimonials } from "../../data/testmonials";
import { featuredImages } from "../../data/Featured";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Load fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Animation on scroll
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          entry.target.classList.add("opacity-100");
          entry.target.classList.remove("opacity-0");
          entry.target.classList.remove("translate-y-10");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (link.parentNode) {
        document.head.removeChild(link);
      }

      // Cleanup observer
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <div className="overflow-hidden" >
      <About />

      {/* About Section */}
      <section
        ref={addToRefs}
        
        className="py-24 px-4 md:px-8 max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2
            className="text-3xl md:text-4xl text-gray-900 mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Capturing Timeless Memories
          </h2>
          <p
            className="text-lg text-gray-600 mb-8 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            We believe every love story deserves to be told with artistry and
            authenticity. Our approach combines documentary-style storytelling
            with fine art sensibilities, creating images that are both genuine
            and aesthetically stunning.
          </p>
          <div className="w-16 h-0.5 bg-gray-200 mx-auto"></div>
        </div>
      </section>

      <PhotoGrid />

      {/* Why Choose Us Section */}
      <section
        ref={addToRefs}
        className="py-24 px-4 md:px-8 max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              className="text-3xl md:text-4xl text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Why Choose Us
            </h2>
            <p
              className="text-lg text-gray-600 mb-8 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              With a passion for genuine storytelling and an eye for detail, we
              create timeless images that capture the authentic emotions of your
              special day.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="w-5 h-5 text-gray-700" />
                </div>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Unobtrusive documentary approach
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="w-5 h-5 text-gray-700" />
                </div>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Artful composition and lighting
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="w-5 h-5 text-gray-700" />
                </div>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Timeless editing style
                </p>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <Check className="w-5 h-5 text-gray-700" />
                </div>
                <p
                  className="text-gray-700"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Personalized, attentive service
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="overflow-hidden rounded">
              <img
                src="https://images.unsplash.com/photo-1557363763-8381968f8353?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D"
                alt="Wedding photography"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded mt-8">
              <img
                src="https://images.unsplash.com/photo-1550005809-91ad75fb315f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Wedding photography"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work with Clip Path */}
      <section
        ref={addToRefs}
        className="py-20 relative opacity-0 translate-y-10 transition-all duration-700"
      >
        <div
          className="absolute inset-0 bg-gray-50"
          style={{
            clipPath:
              "polygon(73% 18%, 100% 0, 100% 100%, 24% 87%, 0 100%, 0 0)",
          }}
        ></div>

        <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Featured Work
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              A glimpse into our portfolio of cherished moments and beautiful
              celebrations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featuredImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden group transition-all duration-300 hover:shadow-lg relative"
              >
                <div className="overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link
                    to="/photography"
                    className="bg-white bg-opacity-80 text-gray-800 px-6 py-2 transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    View Gallery
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/photography"
              className="inline-flex items-center text-gray-700 hover:text-gray-900 transition-colors font-light"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Explore Complete Gallery <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section
        ref={addToRefs}
        className="py-24 px-4 md:px-8 max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl text-gray-900 mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Our Process
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            From initial consultation to final delivery, we ensure a seamless
            and enjoyable experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <MessageSquare className="w-7 h-7 text-gray-500" />
              </div>
            </div>
            <h3
              className="text-xl text-center text-gray-800 mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              1. Consultation
            </h3>
            <p
              className="text-gray-600 text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              We begin with an in-depth conversation to understand your vision,
              preferences, and the unique elements of your love story.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <Camera className="w-7 h-7 text-gray-500" />
              </div>
            </div>
            <h3
              className="text-xl text-center text-gray-800 mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              2. Capture
            </h3>
            <p
              className="text-gray-600 text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              On your special day, we work discreetly to document authentic
              moments while ensuring you feel comfortable and natural.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 group">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                <Heart className="w-7 h-7 text-gray-500" />
              </div>
            </div>
            <h3
              className="text-xl text-center text-gray-800 mb-4"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              3. Curation
            </h3>
            <p
              className="text-gray-600 text-center"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              We meticulously select and enhance your images, creating a
              carefully curated collection that tells your complete story.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={addToRefs}
        className="py-24 px-4 md:px-8 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl text-gray-900 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Client Love
            </h2>
            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Hear from couples who trusted us with their precious memories
            </p>
          </div>

          <div className="relative">
            {/* Testimonial Carousel */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentTestimonial * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="min-w-full px-4">
                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 shadow-sm relative">
                      <div
                        className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl text-gray-200"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        "
                      </div>
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0">
                          <img
                            src={testimonial.image}
                            alt={testimonial.couple}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p
                            className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed italic"
                            style={{
                              fontFamily: "'Cormorant Garamond', serif",
                            }}
                          >
                            "{testimonial.quote}"
                          </p>
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <p
                              className="text-gray-800 font-medium"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {testimonial.couple}
                            </p>
                            <p
                              className="text-gray-500 text-sm"
                              style={{ fontFamily: "'Montserrat', sans-serif" }}
                            >
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} className="text-gray-600" />
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? "bg-gray-700 w-4"
                        : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        ref={addToRefs}
        className="py-24 px-4 md:px-8 relative opacity-0 translate-y-10 transition-all duration-700"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")',
            filter: "brightness(0.4)",
          }}
        ></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center text-white">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let's Create Beautiful Memories Together
          </h2>
          <p
            className="text-xl text-white/90 mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Your love story deserves to be captured with artistry and emotion
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-gray-900 hover:bg-white/90 transition-colors text-sm uppercase tracking-wider"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
