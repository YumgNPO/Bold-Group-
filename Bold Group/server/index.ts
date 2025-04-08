/**
 * Main Server Entry Point
 * 
 * This file sets up the Express server with middleware, routing, and server configuration.
 * It handles both API requests and serves the React frontend in development or production.
 */
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Initialize Express application
const app = express();

// Middleware for parsing JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * Request/Response Logging Middleware
 * 
 * Captures API request details and logs them for debugging:
 * - Request method and path
 * - Response status code
 * - Request duration
 * - Response body (truncated if too long)
 */
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  // Intercept the original json method to capture response data
  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  // After response is sent, log the request details
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      // Truncate long log lines for readability
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Self-executing async function to use await with top-level code
(async () => {
  // Register API routes from routes.ts
  const server = await registerRoutes(app);

  /**
   * Global Error Handler
   * 
   * Catches any errors thrown during request processing and returns
   * an appropriate error response to the client
   */
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  /**
   * Frontend Serving Configuration
   * 
   * In development: Use Vite dev server with HMR support
   * In production: Serve pre-built static files
   * 
   * Note: This must be set up after API routes to prevent the catch-all route
   * from interfering with API endpoints
   */
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  /**
   * Server Startup
   * 
   * Start the HTTP server on port 5000
   * - 0.0.0.0 binds to all available network interfaces
   * - reusePort allows multiple processes to bind to the same port
   */
  const port = 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();
