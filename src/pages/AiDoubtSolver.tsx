import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Send, Brain, BookOpen, Camera } from "lucide-react"

export default function AiDoubtSolver() {
  const [query, setQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    if (!query.trim()) return
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setQuery("")
    }, 2000)
  }

  const recentQueries = [
    {
      id: 1,
      question: "How to solve quadratic equations?",
      subject: "Mathematics",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      question: "Explain photosynthesis process",
      subject: "Biology", 
      timestamp: "1 day ago"
    },
    {
      id: 3,
      question: "What is Newton's second law?",
      subject: "Physics",
      timestamp: "2 days ago"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold gradient-text">AI Doubt Solver</h1>
          <p className="text-muted-foreground">Get instant help with your academic questions</p>
        </div>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Ask Your Question
            </CardTitle>
            <CardDescription>
              Type your question or upload an image for instant AI-powered solutions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Ask any academic question here..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="min-h-32"
            />
            <div className="flex gap-2">
              <Button 
                onClick={handleSubmit}
                disabled={!query.trim() || isLoading}
                className="glow-button flex-1"
              >
                {isLoading ? "Processing..." : "Get Answer"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Camera className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Recent Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentQueries.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-accent/50 transition-colors">
                  <div className="space-y-1">
                    <p className="font-medium">{item.question}</p>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{item.subject}</Badge>
                      <span className="text-sm text-muted-foreground">{item.timestamp}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    View Answer
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}