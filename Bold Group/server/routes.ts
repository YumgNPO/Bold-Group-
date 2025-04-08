/**
 * API Routes Configuration
 * 
 * This file defines all the API endpoints for the application.
 * It handles service listing, details, and payment processing.
 */
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

/**
 * Registers all API routes with the Express application
 * 
 * @param app - The Express application instance
 * @returns An HTTP server instance
 */
export async function registerRoutes(app: Express): Promise<Server> {
  /**
   * Payment Processing Endpoint
   * POST /api/create-payment
   * 
   * Processes payment submissions from the checkout form.
   * In a production app, this would integrate with a payment processor like Stripe.
   * For this demo, it simply stores the payment details in memory.
   */
  app.post("/api/create-payment", async (req, res) => {
    try {
      // Extract payment details from request body
      const { 
        serviceId, 
        packageId, 
        fullName, 
        email, 
        phone, 
        company, 
        amount 
      } = req.body;

      // Validate required fields
      if (!serviceId || !packageId || !fullName || !email || !phone || !amount) {
        return res.status(400).json({ message: "Missing required fields" });
      }

      // In a real implementation, this would validate the payment with a payment processor
      // For this demo, we'll just store the payment details in memory storage
      const payment = await storage.createPayment({
        serviceId,
        packageId,
        fullName,
        email,
        phone,
        company,
        amount,
        status: "completed", // Auto-approve payment for demo purposes
        createdAt: new Date()
      });

      // Return success response with payment details
      res.status(200).json({ 
        success: true, 
        message: "Payment processed successfully", 
        payment 
      });
    } catch (error: any) {
      // Log and return error response
      console.error("Payment error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to process payment", 
        error: error.message 
      });
    }
  });

  /**
   * List All Services Endpoint
   * GET /api/services
   * 
   * Returns a list of all available services offered by Bold Group
   */
  app.get("/api/services", async (req, res) => {
    try {
      const services = await storage.getAllServices();
      res.status(200).json(services);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  /**
   * Service Details Endpoint
   * GET /api/services/:id
   * 
   * Returns detailed information about a specific service by ID
   */
  app.get("/api/services/:id", async (req, res) => {
    try {
      const serviceId = parseInt(req.params.id);
      const service = await storage.getServiceById(serviceId);
      
      // Return 404 if service not found
      if (!service) {
        return res.status(404).json({ message: "Service not found" });
      }
      
      res.status(200).json(service);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  /**
   * Service Packages Endpoint
   * GET /api/services/:id/packages
   * 
   * Returns a list of all available packages for a specific service
   */
  app.get("/api/services/:id/packages", async (req, res) => {
    try {
      const serviceId = parseInt(req.params.id);
      const packages = await storage.getPackagesByServiceId(serviceId);
      
      res.status(200).json(packages);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  });

  // Create HTTP server using the Express app
  const httpServer = createServer(app);

  return httpServer;
}
