import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <OurDoctors></OurDoctors>
      <AppointmentBanner></AppointmentBanner>
      <Testimonials></Testimonials>
      <Blogs></Blogs>
      <Contact></Contact>

      <Footer></Footer>
    </div>
  );
};

export default Home;
