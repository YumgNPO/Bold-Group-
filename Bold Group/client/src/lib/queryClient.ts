/**
 * API Request and React Query Configuration
 * 
 * This file sets up the API request utilities and React Query client for 
 * managing server state and data fetching throughout the application.
 */
import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * Utility function to check response status and throw errors for non-successful responses
 * 
 * @param res - The Fetch API Response object to check
 * @throws Error with status code and response text for non-OK responses
 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/**
 * Makes an API request with standardized error handling
 * 
 * Used for all API calls throughout the application to ensure
 * consistent request formatting and error handling.
 * 
 * @param method - HTTP method (GET, POST, PUT, DELETE, etc.)
 * @param url - The API endpoint URL
 * @param data - Optional request body data (automatically serialized to JSON)
 * @returns The Fetch API Response object
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  // Make the request with appropriate headers and options
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include", // Include cookies for authenticated requests
  });

  // Check for error responses and throw if non-OK
  await throwIfResNotOk(res);
  return res;
}

/**
 * Behavior options for handling 401 Unauthorized responses
 * - "returnNull": Silently return null (for optional auth checks)
 * - "throw": Throw an error (for required auth)
 */
type UnauthorizedBehavior = "returnNull" | "throw";

/**
 * Factory function to create a React Query query function
 * 
 * Creates a standardized query function that can be used for all
 * React Query hooks to ensure consistent behavior and error handling.
 * 
 * @param options.on401 - How to handle unauthorized (401) responses
 * @returns A React Query query function
 */
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    // Make the request using the first query key as the URL
    const res = await fetch(queryKey[0] as string, {
      credentials: "include", // Include cookies for authenticated requests
    });

    // Handle 401 responses according to specified behavior
    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null; // Return null instead of throwing for optional auth
    }

    // Check for other error responses and throw if non-OK
    await throwIfResNotOk(res);
    
    // Parse and return the JSON response
    return await res.json();
  };

/**
 * Global React Query client instance
 * 
 * Configures React Query with application-specific defaults:
 * - Custom query function with error handling
 * - Disabled automatic refetching to prevent unnecessary API calls
 * - No retries on error (use explicit retry logic if needed)
 * - Infinite stale time to prevent automatic background refetching
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,      // Don't automatically refetch on interval
      refetchOnWindowFocus: false, // Don't refetch when window regains focus
      staleTime: Infinity,         // Data never becomes stale automatically
      retry: false,                // Don't retry failed requests automatically
    },
    mutations: {
      retry: false,                // Don't retry failed mutations automatically
    },
  },
});
