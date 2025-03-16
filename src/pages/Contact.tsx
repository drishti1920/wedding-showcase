import { useEffect, useState } from "react";
import {
  Calendar,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  about: string;
  location: string;
  date: string;
  service: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    about: "",
    location: "",
    date: "",
    service: "Wedding",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  useEffect(() => {
    // Load the fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    return () => {
      if (link.parentNode) {
        document.head.removeChild(link);
      }
    };
  }, []);

  const validateForm = (): boolean => {
    const errors: Partial<FormData> = {};

    if (!formData.name.trim()) errors.name = "Name is required";

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Valid email is required";
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }

    if (!formData.about.trim()) {
      errors.about = "Please tell us about your event";
    }

    if (!formData.location.trim()) {
      errors.location = "Location is required";
    }

    if (!formData.date) {
      errors.date = "Date is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name as keyof FormData]) {
      setFormErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const sendToWhatsApp = () => {
    // Format the message for WhatsApp
    const whatsappMessage = `
*New Booking Inquiry*
------------------
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Date:* ${formData.date}
*Location:* ${formData.location}
*Details:* ${formData.about}
    `.trim();

    // Your WhatsApp number - replace with your actual number
    const whatsappNumber = "+918696144810"; // Assuming this is your number from the page

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      // Send data to WhatsApp and show success message
      try {
        sendToWhatsApp();

        // Show success message
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitSuccess(true);

          // Reset form after submission
          setFormData({
            name: "",
            email: "",
            phone: "",
            about: "",
            location: "",
            date: "",
            service: "Wedding",
          });

          // Reset success message after 5 seconds
          setTimeout(() => setSubmitSuccess(false), 5000);
        }, 1000);
      } catch (error) {
        console.error("Error sending to WhatsApp:", error);
        setIsSubmitting(false);
        alert(
          "There was an error sending your message. Please try again or contact us directly."
        );
      }
    }
  };
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1
          className="text-4xl md:text-5xl text-gray-900 mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Contact Us
        </h1>
        <p
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Please fill in the form below and provide as many details as possible
          to help us create an accurate quote. We will try to get back within 48
          hours. Give us a call on the number below if you don't hear from us or
          if it's a last-minute inquiry. Please go through our FAQ section to
          find answers to common questions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
        {/* Contact Information Section */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 border border-gray-100 shadow-sm h-full">
            <h2
              className="text-2xl text-gray-800 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="ml-4">
                  <p
                    className="text-sm text-gray-500 mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Email
                  </p>
                  <a
                    href="mailto:hello@thestorytimliners.com"
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    hello@thestorytimliners.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="ml-4">
                  <p
                    className="text-sm text-gray-500 mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:+917889457383"
                    className="text-gray-800 hover:text-gray-600 transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    +91 7889457383
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="ml-4">
                  <p
                    className="text-sm text-gray-500 mb-1"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Location
                  </p>
                  <p
                    className="text-gray-800"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Jaipur, Rajasthan
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3
                className="text-xl text-gray-800 mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Working Hours
              </h3>
              <p
                className="text-gray-600 mb-2"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Monday - Friday: 9am - 6pm
              </p>
              <p
                className="text-gray-600"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Saturday: 10am - 4pm
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 border border-gray-100 shadow-sm">
            <h2
              className="text-2xl text-gray-800 mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Tell Us About Your Special Day
            </h2>

            {submitSuccess ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-md mb-6 transition-all duration-300 animate-fade-in">
                <p
                  className="text-lg mb-2"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Thank you for reaching out!
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  We've received your inquiry and will get back to you within 48
                  hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="group relative transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <User size={16} className="text-gray-400 mr-2" />
                      <label
                        htmlFor="name"
                        className="text-gray-700"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Your Name
                      </label>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 border ${
                        formErrors.name ? "border-red-300" : "border-gray-300"
                      } focus:border-gray-500 outline-none transition-all duration-300`}
                      placeholder="John & Jane Doe"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="group relative transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Mail size={16} className="text-gray-400 mr-2" />
                      <label
                        htmlFor="email"
                        className="text-gray-700"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Email Address
                      </label>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 border ${
                        formErrors.email ? "border-red-300" : "border-gray-300"
                      } focus:border-gray-500 outline-none transition-all duration-300`}
                      placeholder="your@email.com"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone Input */}
                  <div className="group relative transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Phone size={16} className="text-gray-400 mr-2" />
                      <label
                        htmlFor="phone"
                        className="text-gray-700"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Phone Number
                      </label>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full p-3 border ${
                        formErrors.phone ? "border-red-300" : "border-gray-300"
                      } focus:border-gray-500 outline-none transition-all duration-300`}
                      placeholder="+91 9999999999"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* Service Dropdown */}
                  <div className="group relative transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <MessageSquare size={16} className="text-gray-400 mr-2" />
                      <label
                        htmlFor="service"
                        className="text-gray-700"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Service Type
                      </label>
                    </div>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 focus:border-gray-500 outline-none transition-all duration-300 bg-white"
                    >
                      <option value="Wedding">Wedding</option>
                      <option value="Event">Event</option>
                      <option value="Shoot">Shoot</option>
                      <option value="Birthday">Birthday</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Location Input */}
                  <div className="group relative transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <MapPin size={16} className="text-gray-400 mr-2" />
                      <label
                        htmlFor="location"
                        className="text-gray-700"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Event Location
                      </label>
                    </div>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className={`w-full p-3 border ${
                        formErrors.location
                          ? "border-red-300"
                          : "border-gray-300"
                      } focus:border-gray-500 outline-none transition-all duration-300`}
                      placeholder="City, Country"
                    />
                    {formErrors.location && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.location}
                      </p>
                    )}
                  </div>

                  {/* Date Input */}
                  <div className="group relative transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="text-gray-400 mr-2" />
                      <label
                        htmlFor="date"
                        className="text-gray-700"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Event Date
                      </label>
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full p-3 border ${
                        formErrors.date ? "border-red-300" : "border-gray-300"
                      } focus:border-gray-500 outline-none transition-all duration-300`}
                    />
                    {formErrors.date && (
                      <p className="text-red-500 text-sm mt-1">
                        {formErrors.date}
                      </p>
                    )}
                  </div>
                </div>

                {/* Event Details Textarea */}
                <div className="group relative transition-all duration-300">
                  <div className="flex items-center mb-2">
                    <MessageSquare size={16} className="text-gray-400 mr-2" />
                    <label
                      htmlFor="about"
                      className="text-gray-700"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Tell us about your event
                    </label>
                  </div>
                  <textarea
                    id="about"
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full p-3 border ${
                      formErrors.about ? "border-red-300" : "border-gray-300"
                    } focus:border-gray-500 outline-none transition-all duration-300 resize-none`}
                    placeholder="Please share details about your event, expectations, and any special requests..."
                  ></textarea>
                  {formErrors.about && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.about}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full md:w-auto px-8 py-3 bg-gray-900 text-white hover:bg-gray-800 transition-colors text-sm uppercase tracking-wider flex items-center justify-center ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Inquiry"
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Map or additional content could go here */}
      <div className="mt-16 text-center">
        <p
          className="text-lg text-gray-600 mb-4"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          We look forward to capturing your special moments
        </p>
        <div className="w-16 h-0.5 bg-gray-300 mx-auto"></div>
      </div>
    </div>
  );
};

export default Contact;
