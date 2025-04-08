/**
 * Not Found (404) Page Component
 * 
 * This component is displayed when a user navigates to a URL that doesn't match any defined routes.
 * It provides a user-friendly 404 error page with clear messaging and visual indicators.
 */
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      {/* Error card with shadow and rounded corners */}
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          {/* Header with warning icon and title */}
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          {/* Error message */}
          <p className="mt-4 text-sm text-gray-600">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Return to home button */}
          <div className="mt-6 flex justify-center">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90">
                Return to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
