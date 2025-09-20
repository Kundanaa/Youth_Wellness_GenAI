import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircleHeart, Brain, Heart, BookOpen, Users, Shield } from "lucide-react";
import { AIChat } from "@/components/AIChat";
import { MoodTracker } from "@/components/MoodTracker";
import { useState } from "react";
import heroImage from "@/assets/hero-wellness.jpg";
import chatIcon from "@/assets/chat-icon.jpg";
import moodIcon from "@/assets/mood-tracker.jpg";

const Index = () => {
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-calm">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-wellness opacity-90" />
        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                Powered by AI • Safe • Confidential
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Your Mental Wellness
                <span className="block text-primary">Journey Starts Here</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Connect with AI-powered support designed specifically for young people. 
                Get personalized guidance, track your mood, and access resources whenever you need them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 shadow-glow transform hover:scale-105 transition-all duration-300"
                  onClick={() => setActiveFeature('chat')}
                >
                  <MessageCircleHeart className="mr-2 h-5 w-5" />
                  Start Wellness Chat
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary/30 text-primary hover:bg-primary/10"
                  onClick={() => setActiveFeature('mood')}
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Check Your Mood
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Youth mental wellness support"
                className="rounded-3xl shadow-soft w-full max-w-lg mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-card/90 backdrop-blur-sm rounded-2xl p-4 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">AI Support Available 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Features */}
      {activeFeature === 'chat' && (
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <AIChat />
          </div>
        </section>
      )}

      {activeFeature === 'mood' && (
        <section className="py-12 bg-card/30">
          <div className="container mx-auto px-6">
            <MoodTracker />
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Everything You Need for Mental Wellness
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform combines cutting-edge AI with evidence-based mental health practices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-soft group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-wellness rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={chatIcon} alt="AI Chat" className="w-10 h-10 rounded-lg" />
                </div>
                <CardTitle className="text-primary">AI Wellness Chat</CardTitle>
                <CardDescription>
                  Have supportive conversations with our AI trained in youth mental health
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full hover:bg-primary/10"
                  onClick={() => setActiveFeature('chat')}
                >
                  Try Now
                </Button>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:shadow-soft group">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-support rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={moodIcon} alt="Mood Tracker" className="w-10 h-10 rounded-lg" />
                </div>
                <CardTitle className="text-secondary-foreground">Mood Tracking</CardTitle>
                <CardDescription>
                  Monitor your emotional well-being with simple, insightful check-ins
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full hover:bg-secondary/20"
                  onClick={() => setActiveFeature('mood')}
                >
                  Track Mood
                </Button>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:border-accent/40 transition-all duration-300 hover:shadow-soft group">
              <CardHeader>
                <div className="w-16 h-16 bg-accent rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-accent-foreground">Wellness Resources</CardTitle>
                <CardDescription>
                  Access curated mental health resources, exercises, and educational content
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full hover:bg-accent/20"
                  onClick={() => window.open('https://www.nimh.nih.gov/health/topics/child-and-adolescent-mental-health', '_blank')}
                >
                  Explore Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Safety */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">100% Confidential</h3>
              <p className="text-muted-foreground">Your conversations are private and secure</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-secondary-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Youth-Focused</h3>
              <p className="text-muted-foreground">Designed specifically for young people's needs</p>
            </div>
            <div className="flex flex-col items-center">
              <Brain className="w-12 h-12 text-accent-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Evidence-Based</h3>
              <p className="text-muted-foreground">Grounded in proven mental health practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-16 bg-gradient-wellness">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health with AI-powered support that's always here for you.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-primary hover:bg-white/90 shadow-glow transform hover:scale-105 transition-all duration-300"
            onClick={() => setActiveFeature('chat')}
          >
            <MessageCircleHeart className="mr-2 h-5 w-5" />
            Get Started Today
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;