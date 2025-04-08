/**
 * Database Schema Definitions
 * 
 * This file defines the database schema for the Bold Group application using Drizzle ORM.
 * It provides table definitions, insert schemas, and TypeScript types for all data models.
 */
import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

/**
 * Users Table
 * 
 * Stores user authentication information.
 * In a real application, this would include more user details and profile information.
 */
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(), // Would be hashed in a real application
});

/**
 * Services Table
 * 
 * Stores information about the services offered by Bold Group.
 * Each service has a unique slug, title, descriptions, and an icon.
 */
export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(), // URL-friendly identifier
  title: text("title").notNull(),
  shortDescription: text("short_description").notNull(), // Brief overview for cards
  longDescription: text("long_description").notNull(), // Detailed description for service page
  iconClass: text("icon_class").notNull(), // CSS class for displaying an icon
});

/**
 * Service Packages Table
 * 
 * Stores different pricing tiers/packages for each service.
 * Each package belongs to a specific service and has its own pricing and features.
 */
export const servicePackages = pgTable("service_packages", {
  id: serial("id").primaryKey(),
  serviceId: integer("service_id").references(() => services.id).notNull(),
  name: text("name").notNull(), // Package name (e.g., "Basic", "Standard", "Premium")
  price: integer("price").notNull(), // Price in the smallest currency unit (e.g., cents, kobo)
  description: text("description").notNull(), // Package description
});

/**
 * Payments Table
 * 
 * Records payment transactions made by customers.
 * Tracks which service and package was purchased, customer information, and payment status.
 */
export const payments = pgTable("payments", {
  id: serial("id").primaryKey(),
  serviceId: integer("service_id").references(() => services.id).notNull(),
  packageId: integer("package_id").references(() => servicePackages.id).notNull(),
  fullName: text("full_name").notNull(), // Customer's full name
  email: text("email").notNull(), // Customer's email address
  phone: text("phone").notNull(), // Customer's phone number
  company: text("company"), // Optional company name
  amount: integer("amount").notNull(), // Payment amount
  status: text("status").notNull().default("completed"), // Payment status
  createdAt: timestamp("created_at").notNull().defaultNow(), // Transaction timestamp
});

/**
 * Zod Schema for User Insertion
 * 
 * Defines validation rules for creating new users.
 * Only includes username and password fields, as ID is auto-generated.
 */
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

/**
 * Zod Schemas for Data Insertion
 * 
 * Define validation rules for inserting new records into each table.
 * These schemas are used for request body validation in API endpoints.
 */
export const insertServiceSchema = createInsertSchema(services);
export const insertServicePackageSchema = createInsertSchema(servicePackages);
export const insertPaymentSchema = createInsertSchema(payments);

/**
 * TypeScript Types for Database Operations
 * 
 * These types provide type safety for database operations throughout the application.
 * Each type has an Insert variant (for creation) and a regular variant (for querying).
 */
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertService = z.infer<typeof insertServiceSchema>;
export type Service = typeof services.$inferSelect;

export type InsertServicePackage = z.infer<typeof insertServicePackageSchema>;
export type ServicePackage = typeof servicePackages.$inferSelect;

export type InsertPayment = z.infer<typeof insertPaymentSchema>;
export type Payment = typeof payments.$inferSelect;
