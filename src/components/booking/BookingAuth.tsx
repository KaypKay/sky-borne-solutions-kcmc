
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GoogleLogo } from "@/components/icons/GoogleLogo";

interface BookingAuthProps {
  onAuthSuccess: (userData: { email: string; name?: string; isGuest: boolean }) => void;
}

const BookingAuth: React.FC<BookingAuthProps> = ({ onAuthSuccess }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const { toast } = useToast();
  
  const handleGoogleSignIn = () => {
    // In a real implementation, this would connect to Google OAuth
    // For demo purposes, we'll simulate a successful login
    setTimeout(() => {
      toast({
        title: "Signed in with Google",
        description: "You have been successfully authenticated!",
      });
      onAuthSuccess({
        email: "demo@example.com",
        name: "Demo User",
        isGuest: false
      });
    }, 1000);
  };
  
  const handleGuestLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email to continue as a guest",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Continuing as guest",
      description: "Your quote will be sent to your email address",
    });
    
    onAuthSuccess({
      email,
      name: name || undefined,
      isGuest: true
    });
  };

  return (
    <div className="my-8">
      <Tabs defaultValue="google" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="google">Sign in with Google</TabsTrigger>
          <TabsTrigger value="guest">Continue as Guest</TabsTrigger>
        </TabsList>
        
        <TabsContent value="google">
          <Card>
            <CardHeader>
              <CardTitle>Google Authentication</CardTitle>
              <CardDescription>
                Sign in with your Google account for faster checkout and to track your bookings.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button 
                onClick={handleGoogleSignIn}
                variant="outline"
                className="w-full max-w-xs flex items-center justify-center gap-2"
              >
                <GoogleLogo />
                Sign in with Google
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="guest">
          <Card>
            <CardHeader>
              <CardTitle>Guest Checkout</CardTitle>
              <CardDescription>
                Continue as a guest. We'll need your email to send your quote.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleGuestLogin}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name (Optional)</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email <span className="text-red-500">*</span></Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full bg-kcmc-sky hover:bg-kcmc-rain text-white">
                  Continue as Guest
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BookingAuth;
