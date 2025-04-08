/**
 * Main Application Component
 * 
 * This is the entry point for the Bold Group website application.
 * It sets up routing, global state (React Query), and the main layout structure.
 */
import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ServiceDetails from "./pages/ServiceDetails";
import Checkout from "./pages/Checkout";
import Team from "./pages/Team";
import NotFound from "@/pages/not-found";
import { useEffect } from "react";

/**
 * ScrollToTop Component
 * 
 * A utility component that scrolls the window to the top whenever
 * the current route changes. This ensures pages always load from the top.
 */
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

/**
 * Router Component
 * 
 * Defines all application routes using Wouter's declarative routing.
 * Each route maps a URL path to a specific page component.
 */
function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        {/* Home page - displays main landing page with service overview */}
        <Route path="/" component={Home} />
        
        {/* Service details page - shows detailed information about a specific service */}
        <Route path="/services/:serviceId" component={ServiceDetails} />
        
        {/* Checkout page - handles payment processing for a selected service package */}
        <Route path="/checkout/:serviceId/:packageId" component={Checkout} />
        
        {/* Team page - displays information about the company's team members */}
        <Route path="/team" component={Team} />
        
        {/* Fallback route for any undefined paths */}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

/**
 * Main App Component
 * 
 * Sets up the application with:
 * - React Query for API data fetching
 * - Main layout with header, content area, and footer
 * - Toast notifications system
 */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* Main layout container */}
      <div className="flex flex-col min-h-screen">
        {/* Global navigation header */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-grow">
          <Router />
        </main>
        
        {/* Global footer */}
        <Footer />
      </div>
      
      {/* Toast notification system */}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
