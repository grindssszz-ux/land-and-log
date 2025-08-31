import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award } from "lucide-react"

const quizzes = [
  {
    id: 1,
    title: "Mathematics - Algebra Basics",
    subject: "Mathematics",
    duration: "30 mins",
    questions: 20,
    difficulty: "Easy",
    participants: 156,
    status: "Available"
  },
  {
    id: 2,
    title: "Physics - Motion and Force",
    subject: "Physics", 
    duration: "45 mins",
    questions: 25,
    difficulty: "Medium",
    participants: 89,
    status: "Available"
  },
  {
    id: 3,
    title: "Chemistry - Organic Compounds",
    subject: "Chemistry",
    duration: "60 mins", 
    questions: 30,
    difficulty: "Hard",
    participants: 67,
    status: "Available"
  },
  {
    id: 4,
    title: "Biology - Cell Structure",
    subject: "Biology",
    duration: "40 mins",
    questions: 22,
    difficulty: "Medium", 
    participants: 134,
    status: "Completed"
  }
]

export default function Quizzes() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Quizzes</h1>
          <p className="text-muted-foreground">Test your knowledge with interactive quizzes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="glass-card hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{quiz.title}</CardTitle>
                  <Badge variant={quiz.status === "Available" ? "default" : "secondary"}>
                    {quiz.status}
                  </Badge>
                </div>
                <CardDescription>{quiz.subject}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{quiz.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>{quiz.participants}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <Badge variant="outline">{quiz.difficulty}</Badge>
                  <span className="text-sm text-muted-foreground">{quiz.questions} questions</span>
                </div>

                <Button 
                  className="w-full glow-button" 
                  disabled={quiz.status === "Completed"}
                >
                  {quiz.status === "Available" ? "Start Quiz" : "View Results"}
                  <Award className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}