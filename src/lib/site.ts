export const site = {
  name: "Adv. Atul Kumar Jha",
  role: "High Court Advocate",
  phone: "+918468859644",
  phoneDisplay: "084688 59644",
  whatsapp: "918468859644",
  email: "advocate@email.com",
  address: "Chamber No. 000, High Court Complex, Your City, Your State - 000000",
  hours: "Mon – Sat: 10:00 AM – 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.070!2d77.2410!3d28.6236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHigh%20Court%20of%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000",
  social: {
    facebook: "https://facebook.com/",
    linkedin: "https://linkedin.com/",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
  },
};

export const waLink = (msg?: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    msg ??
      "Hello Advocate, I visited your website and would like to book a legal consultation.",
  )}`;

export const telLink = `tel:${site.phone}`;
export const mailLink = `mailto:${site.email}`;
