/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import ImpactDashboard from './components/sections/ImpactDashboard';
import DivingJourney from './components/sections/DivingJourney';
import EducationHub from './components/sections/EducationHub';
import CorporateCSR from './components/sections/CorporateCSR';
import Footer from './components/sections/Footer';
import RegistrationModal from './components/RegistrationModal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen">
      <Navbar onJoinClick={openModal} />
      <main>
        <Hero onJoinClick={openModal} />
        <ImpactDashboard />
        <DivingJourney />
        <EducationHub />
        <CorporateCSR />
      </main>
      <Footer />
      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
