import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Camera, Clock, Heart, Star, Users, Zap } from 'lucide-react';

const AboutUs = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Load the fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Simple scroll animation
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0');
          entry.target.classList.remove('translate-y-10');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (link.parentNode) {
        document.head.removeChild(link);
      }
      
      // Cleanup observer
      sectionRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1620315472787-52921e5f88a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        
        <div className="relative flex items-center justify-center h-full z-20 px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Capturing Love Stories Through Our Lens
            </h1>
            <p 
              className="text-xl text-white/90 mb-8" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Turning moments into timeless memories
            </p>
            <div className="w-16 h-0.5 bg-white/70 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div 
        ref={addToRefs}
        className="py-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-center opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 
          className="text-3xl md:text-4xl text-gray-900 mb-8" 
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Our Passion for Photography
        </h2>
        <p 
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8" 
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          At TheStoryTimeliners, we believe every love story is unique and deserves to be captured with artistry and authenticity. We're not just photographers, we're storytellers who preserve the emotional journey of your special day through our carefully crafted visual narratives.
        </p>
        <p 
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed" 
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Founded on a passion for genuine moments and artistic vision, our team brings a unique blend of technical expertise and emotional intelligence to every wedding we photograph.
        </p>
      </div>

      {/* Vision Section - Image Right */}
      <div 
        ref={addToRefs}
        className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 
              className="text-3xl text-gray-900 mb-6" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Vision
            </h2>
            <p 
              className="text-lg text-gray-600 leading-relaxed mb-6" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              We see beyond the expected wedding shots, seeking out the candid emotions, subtle interactions, and artistic details that make your celebration unique. Our vision is to create a visual legacy that reminds you not just how your day looked, but how it felt.
            </p>
            <p 
              className="text-lg text-gray-600 leading-relaxed" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Each frame we capture aims to evoke the emotions of your day—the nervous anticipation, overwhelming joy, tender moments, and celebratory energy that define a wedding celebration.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_photo-1664297755132-af79f91c26df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJld2VkZGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
                alt="Couple during sunset" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section - Image Left */}
      <div 
        ref={addToRefs}
        className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-1">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1606217239582-d9f72323bcd7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Wedding ceremony" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-2">
            <h2 
              className="text-3xl text-gray-900 mb-6" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Experience
            </h2>
            <p 
              className="text-lg text-gray-600 leading-relaxed mb-6" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              With over a decade capturing weddings across diverse cultures and breathtaking locations worldwide, we've developed an instinct for anticipating meaningful moments before they happen. Our experience has taught us the delicate balance of being present without being intrusive.
            </p>
            <p 
              className="text-lg text-gray-600 leading-relaxed" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              We've photographed intimate elopements on cliffsides, grand celebrations in historic venues, and everything in between. This diverse experience allows us to adapt seamlessly to any wedding scenario while maintaining our distinctive artistic voice.
            </p>
          </div>
        </div>
      </div>

      {/* Artistic Approach - Image Right */}
      <div 
        ref={addToRefs}
        className="py-16 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 
              className="text-3xl text-gray-900 mb-6" 
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Artistic Approach
            </h2>
            <p 
              className="text-lg text-gray-600 leading-relaxed mb-6" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              We blend documentary-style coverage with fine art sensibilities, creating images that are both authentic and aesthetically striking. Our editing style emphasizes timeless elegance with luminous natural light, rich colors, and thoughtful composition.
            </p>
            <p 
              className="text-lg text-gray-600 leading-relaxed" 
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              For us, the perfect photograph balances technical precision with emotional depth. We meticulously study lighting, composition, and timing, while remaining attuned to the emotional currents of your day, capturing the genuine connections that make your relationship special.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden">
              <img 
                src="https://plus.unsplash.com/premium_photo-1675851210850-de5525809dd9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D" 
                alt="Couple portrait" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div 
        ref={addToRefs}
        className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 
            className="text-3xl md:text-4xl text-gray-900 mb-4" 
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Why Choose Us
          </h2>
          <p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-16" 
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            We bring a unique blend of artistic vision, technical expertise, and personal dedication to every wedding.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Heart className="w-10 h-10 text-gray-400" />
              </div>
              <h3 
                className="text-xl text-gray-800 mb-3" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Emotionally Driven
              </h3>
              <p 
                className="text-gray-600" 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We prioritize capturing genuine emotions and connections, creating images that resonate on a deeper level.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Camera className="w-10 h-10 text-gray-400" />
              </div>
              <h3 
                className="text-xl text-gray-800 mb-3" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Technical Excellence
              </h3>
              <p 
                className="text-gray-600" 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our mastery of light, composition, and advanced equipment ensures exceptional image quality in any setting.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Users className="w-10 h-10 text-gray-400" />
              </div>
              <h3 
                className="text-xl text-gray-800 mb-3" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Client Experience
              </h3>
              <p 
                className="text-gray-600" 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We believe in building relationships with our couples, offering guidance and support throughout the process.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Star className="w-10 h-10 text-gray-400" />
              </div>
              <h3 
                className="text-xl text-gray-800 mb-3" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Artistic Vision
              </h3>
              <p 
                className="text-gray-600" 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Our distinctive aesthetic combines timeless elegance with modern sensibilities for truly unique imagery.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Clock className="w-10 h-10 text-gray-400" />
              </div>
              <h3 
                className="text-xl text-gray-800 mb-3" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Timely Delivery
              </h3>
              <p 
                className="text-gray-600" 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We understand the excitement to see your images, delivering carefully edited galleries within promised timeframes.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <Zap className="w-10 h-10 text-gray-400" />
              </div>
              <h3 
                className="text-xl text-gray-800 mb-3" 
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Attention to Detail
              </h3>
              <p 
                className="text-gray-600" 
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                We capture the intricate details you've carefully planned, preserving every element of your special day.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div 
        ref={addToRefs}
        className="py-24 px-4 md:px-6 lg:px-8 text-center relative overflow-hidden opacity-0 translate-y-10 transition-all duration-700"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80")'
          }}
        ></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 
            className="text-3xl md:text-4xl text-gray-900 mb-6" 
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Let's Create Something Beautiful Together
          </h2>
          <p 
            className="text-lg text-gray-600 mb-8" 
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Every love story deserves to be told with artistry and authenticity. We'd be honored to capture yours.
          </p>
          <Link 
            to="/contact" 
            className="inline-block px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
