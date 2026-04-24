import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import CasesPage from './pages/CasesPage';
import ServicesPage from './pages/ServicesPage';
import ExpertisePage from './pages/ExpertisePage';
import AIAutomationPage from './pages/AIAutomationPage';
import StrategicAdvisoryPage from './pages/StrategicAdvisoryPage';
import DigitalProductsPage from './pages/DigitalProductsPage';
import ScalePerformancePage from './pages/ScalePerformancePage';
import ImageUploader from './components/ImageUploader';
import ProcessDemoPage from './pages/ProcessDemoPage';
import CaseStudyPage from './pages/CaseStudyPage';
import DiscoveryCallPage from './pages/DiscoveryCallPage';
import HealthcarePage from './pages/HealthcarePage';
import RunEventsPage from './pages/RunEventsPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-[#020817]">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/ai-automation" element={<AIAutomationPage />} />
          <Route path="/services/digital-products-ux" element={<DigitalProductsPage />} />
          <Route path="/services/scale-and-performance" element={<ScalePerformancePage />} />
          <Route path="/strategic-advisory" element={<StrategicAdvisoryPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/upload-images" element={<ImageUploader />} />
          <Route path="/process" element={<ProcessDemoPage />} />
          <Route path="/cases/:slug" element={<CaseStudyPage />} />
          <Route path="/discovery" element={<DiscoveryCallPage />} />
          <Route path="/industries/healthcare" element={<HealthcarePage />} />
          <Route path="/cases/run-events" element={<RunEventsPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
