import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Target, TrendingUp, Award } from "lucide-react"

const mockTests = [
  {
    id: 1,
    title: "JEE Main Mathematics Mock Test",
    type: "Mock Test",
    duration: "3 hours",
    questions: 90,
    attempts: 3,
    bestScore: 85,
    avgScore: 78,
    difficulty: "Hard"
  },
  {
    id: 2,
    title: "NEET Biology Practice Set",
    type: "Practice Test",
    duration: "2 hours",
    questions: 60,
    attempts: 5,
    bestScore: 92,
    avgScore: 88,
    difficulty: "Medium"
  },
  {
    id: 3,
    title: "Class 12 Physics Chapter Test",
    type: "Chapter Test",
    duration: "1.5 hours",
    questions: 45,
    attempts: 2,
    bestScore: 76,
    avgScore: 72,
    difficulty: "Medium"
  },
  {
    id: 4,
    title: "Chemistry Organic Compounds Test",
    type: "Practice Test",
    duration: "2 hours",
    questions: 50,
    attempts: 1,
    bestScore: 68,
    avgScore: 68,
    difficulty: "Hard"
  }
]

const upcomingTests = [
  {
    id: 1,
    title: "Weekly Mathematics Assessment",
    date: "Tomorrow, 10:00 AM",
    type: "Assessment"
  },
  {
    id: 2,
    title: "Monthly Physics Mock Test",
    date: "Dec 15, 2:00 PM",
    type: "Mock Test"
  }
]

export default function PracticeTests() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Practice & Mock Tests</h1>
          <p className="text-muted-foreground">Enhance your preparation with comprehensive practice tests</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <Target className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">15</p>
              <p className="text-sm text-muted-foreground">Tests Completed</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">83%</p>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <Award className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">5</p>
              <p className="text-sm text-muted-foreground">Top Scores</p>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold">45h</p>
              <p className="text-sm text-muted-foreground">Study Time</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Practice Tests */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold">Available Tests</h2>
            
            <div className="space-y-4">
              {mockTests.map((test) => (
                <Card key={test.id} className="glass-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{test.title}</CardTitle>
                        <CardDescription>{test.type} • {test.questions} questions</CardDescription>
                      </div>
                      <Badge variant={test.difficulty === "Hard" ? "destructive" : "secondary"}>
                        {test.difficulty}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{test.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Target className="h-4 w-4 text-primary" />
                        <span>{test.attempts} attempts</span>
                      </div>
                    </div>
                    
                    {test.attempts > 0 && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Best Score: {test.bestScore}%</span>
                          <span>Avg: {test.avgScore}%</span>
                        </div>
                        <Progress value={test.bestScore} className="h-2" />
                      </div>
                    )}

                    <Button className="w-full glow-button">
                      {test.attempts > 0 ? "Retake Test" : "Start Test"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Tests */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Upcoming Tests</h2>
            
            <div className="space-y-4">
              {upcomingTests.map((test) => (
                <Card key={test.id} className="glass-card">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-medium">{test.title}</h3>
                      <Badge variant="outline">{test.type}</Badge>
                      <p className="text-sm text-muted-foreground">{test.date}</p>
                      <Button size="sm" className="w-full">
                        Set Reminder
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Performance Summary */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-lg">This Week's Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Tests Taken</span>
                  <span className="font-medium">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Average Score</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Time Spent</span>
                  <span className="font-medium">8h 30m</span>
                </div>
                <div className="pt-2">
                  <Progress value={85} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Weekly Goal: 85%</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}