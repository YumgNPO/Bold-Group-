/**
 * In-Memory Data Storage
 * 
 * This file implements an in-memory storage solution for the application data.
 * In a real production app, this would be replaced with a database connection.
 */
import { users, type User, type InsertUser } from "@shared/schema";
import { Service, ServicePackage } from "../client/src/lib/types";
import { services as mockServices } from "../client/src/lib/data";

// Define payment type
interface Payment {
  id: number;
  serviceId: string;
  packageId: string;
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  amount: number;
  status: string;
  createdAt: Date;
}

/**
 * Storage Interface
 * 
 * Defines the contract for data storage implementations.
 * Any storage class (in-memory, database, etc.) must implement these methods.
 */
export interface IStorage {
  /**
   * Retrieves a user by their ID
   * @param id - The user's unique identifier
   * @returns The user object if found, undefined otherwise
   */
  getUser(id: number): Promise<User | undefined>;
  
  /**
   * Retrieves a user by their username
   * @param username - The user's username
   * @returns The user object if found, undefined otherwise
   */
  getUserByUsername(username: string): Promise<User | undefined>;
  
  /**
   * Creates a new user in the storage
   * @param user - The user data to insert
   * @returns The created user with its assigned ID
   */
  createUser(user: InsertUser): Promise<User>;

  /**
   * Creates a new payment record
   * @param paymentData - The payment information to store
   * @returns The created payment record with an assigned ID
   */
  createPayment(paymentData: Omit<Payment, 'id'>): Promise<Payment>;

  /**
   * Gets all services from storage
   * @returns An array of all available services
   */
  getAllServices(): Promise<Service[]>;

  /**
   * Gets a single service by its ID
   * @param id - The service ID to look up
   * @returns The service if found, undefined otherwise
   */
  getServiceById(id: number): Promise<Service | undefined>;

  /**
   * Gets all packages for a specific service
   * @param serviceId - The ID of the service
   * @returns An array of packages for the service
   */
  getPackagesByServiceId(serviceId: number): Promise<ServicePackage[]>;
}

/**
 * In-Memory Storage Implementation
 * 
 * Uses JavaScript Maps to store data in memory.
 * Note: This data is lost when the server restarts.
 */
export class MemStorage implements IStorage {
  /** Map storing users with their IDs as keys */
  private users: Map<number, User>;
  
  /** Map storing payments with their IDs as keys */
  private payments: Map<number, Payment>;
  
  /** Counter for generating unique IDs */
  currentId: number;
  
  /** Counter for generating unique payment IDs */
  paymentId: number;

  /**
   * Initializes the storage with empty collections
   */
  constructor() {
    this.users = new Map();
    this.payments = new Map();
    this.currentId = 1; // Start user IDs at 1
    this.paymentId = 1; // Start payment IDs at 1
  }

  /**
   * Gets a user by ID
   * @param id - The user's ID
   * @returns The user if found, undefined otherwise
   */
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  /**
   * Gets a user by username
   * @param username - The username to search for
   * @returns The user if found, undefined otherwise
   */
  async getUserByUsername(username: string): Promise<User | undefined> {
    // Convert Map to array and find the user by username
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  /**
   * Creates a new user
   * @param insertUser - The user data to insert
   * @returns The created user with an assigned ID
   */
  async createUser(insertUser: InsertUser): Promise<User> {
    // Generate a new unique ID
    const id = this.currentId++;
    
    // Create the user object with ID
    const user: User = { ...insertUser, id };
    
    // Store the user in the map
    this.users.set(id, user);
    
    return user;
  }
  
  /**
   * Creates a new payment record
   * @param paymentData - The payment details to store
   * @returns The created payment with an assigned ID
   */
  async createPayment(paymentData: Omit<Payment, 'id'>): Promise<Payment> {
    // Generate a new unique payment ID
    const id = this.paymentId++;
    
    // Create the complete payment object
    const payment: Payment = { ...paymentData, id };
    
    // Store the payment in the map
    this.payments.set(id, payment);
    
    return payment;
  }
  
  /**
   * Gets all services
   * @returns Array of all services from the mock data
   */
  async getAllServices(): Promise<Service[]> {
    // Return all services from the imported mock data
    return mockServices;
  }
  
  /**
   * Gets a service by ID
   * @param id - The numeric ID of the service
   * @returns The service if found, undefined otherwise
   */
  async getServiceById(id: number): Promise<Service | undefined> {
    // Convert string ID in mock data to numeric ID for comparison
    return mockServices.find(service => parseInt(service.id) === id);
  }
  
  /**
   * Gets packages for a specific service
   * @param serviceId - The ID of the service
   * @returns Array of packages for the service
   */
  async getPackagesByServiceId(serviceId: number): Promise<ServicePackage[]> {
    const service = await this.getServiceById(serviceId);
    
    // If no service found, return empty array
    if (!service) return [];
    
    // Return the packages from the service
    return service.packages;
  }
}

// Create and export a singleton instance of the storage
export const storage = new MemStorage();
