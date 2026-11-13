import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PageLayout } from '../components/layout/PageLayout';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About/About';
import { Products } from '../pages/Products/Products';
import { Agriculture } from '../pages/Agriculture/Agriculture';
import { WhyChooseUs } from '../pages/WhyChooseUs/WhyChooseUs';
import { Visit } from '../pages/Visit/Visit';
import { Contact } from '../pages/Contact/Contact';
import { LocalRasra } from '../pages/LocalRasra/LocalRasra';
import { NotFound } from '../pages/NotFound/NotFound';

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="agriculture" element={<Agriculture />} />
        <Route path="why-choose-us" element={<WhyChooseUs />} />
        <Route path="visit" element={<Visit />} />
        <Route path="contact" element={<Contact />} />
        <Route path="fertilizer-shop-rasra" element={<LocalRasra />} />
        {/* Friendly 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
