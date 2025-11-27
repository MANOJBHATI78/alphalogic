
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import SiteLayout from './components/SiteLayout';
import Home from './pages/Home';
import Services from './pages/Services';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import Blog from './pages/Blog';
import Clients from './pages/Clients';
import Admin from './pages/Admin';
import About from './pages/About';
import { DataProvider, useData } from './context/DataContext';

// Component to simulate SEO updates based on route
const SeoUpdater = () => {
  const location = useLocation();
  const { getPageSeo } = useData();
  
  React.useEffect(() => {
    // Determine the key path (e.g., map /services/web/xyz to /services/web if needed)
    let path = location.pathname;
    
    const seo = getPageSeo(path);
    if (seo) {
      document.title = seo.title;
      // In a real SSR app, you'd update meta tags here. 
      // For this demo, we just log it or update title.
    } else {
      document.title = 'Alphalogic | Digital Growth Agency';
    }
  }, [location, getPageSeo]);

  return null;
};

const ScrollToTop = () => {
  const { pathname } = React.useMemo(() => window.location, []);
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <DataProvider>
      <Router>
        <SeoUpdater />
        <ScrollToTop />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          
          {/* Use /* to ensure nested routes match correctly */}
          <Route path="/*" element={
            <SiteLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                
                {/* Services Routes */}
                <Route path="/services" element={<Navigate to="/services/web" replace />} />
                <Route path="/services/:type" element={<Services />} />
                
                {/* Work Routes */}
                <Route path="/work" element={<Work />} />
                <Route path="/work/:id" element={<ProjectDetail />} />
                
                <Route path="/clients" element={<Clients />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/enquiry" element={<Enquiry />} />
                
                {/* Catch all inside the layout */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </SiteLayout>
          } />
        </Routes>
      </Router>
    </DataProvider>
  );
};

export default App;