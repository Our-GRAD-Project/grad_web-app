import React from 'react';
import HeroSection from '../components/HeroSection';
import DailyInsights from '../components/DailyInsights';
import BookCategories from '../components/BookCategories';
import FeaturedBooks from '../components/FeaturedBooks';
import Testimonials from '../components/Testimonials';
import SubscriptionSection from '../components/SubscriptionSection';

const Home = () => {
  return (
    <div className="px-4 sm:px-10 lg:px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <HeroSection />
        <DailyInsights />
        <BookCategories />  
        <FeaturedBooks />
        <Testimonials />
        <SubscriptionSection />
      </div>
    </div>
  );
};

export default Home;
