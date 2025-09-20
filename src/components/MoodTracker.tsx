import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Heart, Smile, Meh, Frown, Angry, Sun, Cloud, CloudRain, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface MoodEntry {
  mood: string;
  intensity: number;
  notes: string;
  timestamp: Date;
}

const moodOptions = [
  { value: 'happy', label: 'Happy', icon: Smile, color: 'text-green-500', bg: 'bg-green-500/10' },
  { value: 'content', label: 'Content', icon: Sun, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { value: 'neutral', label: 'Neutral', icon: Meh, color: 'text-gray-500', bg: 'bg-gray-500/10' },
  { value: 'anxious', label: 'Anxious', icon: Cloud, color: 'text-yellow-600', bg: 'bg-yellow-600/10' },
  { value: 'sad', label: 'Sad', icon: Frown, color: 'text-blue-600', bg: 'bg-blue-600/10' },
  { value: 'stressed', label: 'Stressed', icon: CloudRain, color: 'text-orange-600', bg: 'bg-orange-600/10' },
  { value: 'angry', label: 'Angry', icon: Angry, color: 'text-red-500', bg: 'bg-red-500/10' },
  { value: 'excited', label: 'Excited', icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-500/10' }
];

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string>("");
  const [intensity, setIntensity] = useState<number>(5);
  const [notes, setNotes] = useState<string>("");
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = () => {
    if (!selectedMood) {
      toast.error("Please select a mood first");
      return;
    }

    const entry: MoodEntry = {
      mood: selectedMood,
      intensity,
      notes,
      timestamp: new Date()
    };

    setEntries(prev => [...prev, entry]);
    setShowResults(true);
    
    toast.success("Mood logged successfully!", {
      description: "Thank you for checking in with yourself today."
    });
  };

  const selectedMoodData = moodOptions.find(m => m.value === selectedMood);

  if (showResults) {
    return (
      <Card className="max-w-2xl mx-auto border-secondary/20 shadow-soft">
        <CardHeader className="bg-gradient-support text-center rounded-t-lg">
          <div className="mx-auto w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-white">Mood Logged Successfully!</CardTitle>
          <CardDescription className="text-white/80">
            You're taking great care of your mental health
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              {selectedMoodData && (
                <>
                  <div className={`w-12 h-12 ${selectedMoodData.bg} rounded-full flex items-center justify-center`}>
                    <selectedMoodData.icon className={`w-6 h-6 ${selectedMoodData.color}`} />
                  </div>
                  <div>
                    <p className="font-semibold text-lg capitalize">{selectedMood}</p>
                    <p className="text-sm text-muted-foreground">Intensity: {intensity}/10</p>
                  </div>
                </>
              )}
            </div>
            
            {notes && (
              <div className="bg-muted/50 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-1">Your notes:</p>
                <p className="text-sm">{notes}</p>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-medium text-center">Personalized Wellness Tips</h3>
            <div className="grid grid-cols-1 gap-3">
              {selectedMood === 'happy' && (
                <Badge variant="outline" className="p-3 justify-start bg-green-500/5 border-green-500/20">
                  <Sun className="w-4 h-4 mr-2 text-green-500" />
                  Share your positive energy with someone you care about
                </Badge>
              )}
              {selectedMood === 'anxious' && (
                <Badge variant="outline" className="p-3 justify-start bg-blue-500/5 border-blue-500/20">
                  <Heart className="w-4 h-4 mr-2 text-blue-500" />
                  Try 5 deep breaths or a short meditation
                </Badge>
              )}
              {selectedMood === 'sad' && (
                <Badge variant="outline" className="p-3 justify-start bg-purple-500/5 border-purple-500/20">
                  <Sparkles className="w-4 h-4 mr-2 text-purple-500" />
                  It's okay to feel sad. Consider reaching out to a friend
                </Badge>
              )}
              <Badge variant="outline" className="p-3 justify-start bg-primary/5 border-primary/20">
                <Heart className="w-4 h-4 mr-2 text-primary" />
                Remember: Your feelings are valid and temporary
              </Badge>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              className="flex-1"
              onClick={() => {
                setShowResults(false);
                setSelectedMood("");
                setIntensity(5);
                setNotes("");
              }}
            >
              Log Another Mood
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              View Mood History
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto border-secondary/20 shadow-soft">
      <CardHeader className="text-center">
        <div className="mx-auto w-16 h-16 bg-gradient-support rounded-full flex items-center justify-center mb-4">
          <Heart className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-secondary-foreground">How are you feeling today?</CardTitle>
        <CardDescription>
          Take a moment to check in with yourself. Your mental health matters.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Mood Selection */}
        <div>
          <h3 className="font-medium mb-4">Select your current mood:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {moodOptions.map((mood) => (
              <button
                key={mood.value}
                onClick={() => setSelectedMood(mood.value)}
                className={`p-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center gap-2 hover:scale-105 ${
                  selectedMood === mood.value
                    ? `border-primary bg-primary/10 ${mood.bg}`
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <mood.icon className={`w-6 h-6 ${selectedMood === mood.value ? mood.color : 'text-muted-foreground'}`} />
                <span className={`text-xs font-medium ${selectedMood === mood.value ? mood.color : 'text-muted-foreground'}`}>
                  {mood.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Intensity Slider */}
        {selectedMood && (
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="font-medium">How intense is this feeling?</label>
              <Badge variant="outline">{intensity}/10</Badge>
            </div>
            <div className="space-y-2">
              <Progress value={intensity * 10} className="h-3" />
              <input
                type="range"
                min="1"
                max="10"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
              />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Mild</span>
                <span>Moderate</span>
                <span>Intense</span>
              </div>
            </div>
          </div>
        )}

        {/* Notes */}
        <div className="space-y-3">
          <label className="font-medium">What's on your mind? (Optional)</label>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Share any thoughts, events, or context about how you're feeling..."
            className="resize-none border-primary/20 focus:border-primary/40"
            rows={3}
          />
        </div>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          disabled={!selectedMood}
          className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-soft"
          size="lg"
        >
          <Heart className="w-4 h-4 mr-2" />
          Log My Mood
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          Your mood data helps you understand patterns and track your wellness journey
        </p>
      </CardContent>
    </Card>
  );
};