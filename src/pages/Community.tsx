import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MessageSquare, Plus, Crown } from "lucide-react"

const groups = [
  {
    id: 1,
    name: "Mathematics Study Group",
    members: 234,
    description: "Collaborative learning for advanced mathematics",
    activity: "Very Active",
    isJoined: true
  },
  {
    id: 2,
    name: "Physics Enthusiasts",
    members: 189,
    description: "Exploring the wonders of physics together",
    activity: "Active",
    isJoined: false
  },
  {
    id: 3,
    name: "Chemistry Lab Partners",
    members: 156,
    description: "Share experiments and lab techniques",
    activity: "Moderate",
    isJoined: true
  },
  {
    id: 4,
    name: "Biology Research Club",
    members: 98,
    description: "Discussing latest biological discoveries",
    activity: "Active",
    isJoined: false
  }
]

const discussions = [
  {
    id: 1,
    title: "Need help with calculus derivatives",
    author: "Sarah M.",
    replies: 12,
    time: "2 hours ago",
    group: "Mathematics Study Group"
  },
  {
    id: 2,
    title: "Quantum mechanics discussion",
    author: "Alex K.",
    replies: 8,
    time: "4 hours ago", 
    group: "Physics Enthusiasts"
  },
  {
    id: 3,
    title: "Lab safety protocols",
    author: "Maria L.",
    replies: 5,
    time: "1 day ago",
    group: "Chemistry Lab Partners"
  }
]

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold gradient-text">Community & Groups</h1>
          <p className="text-muted-foreground">Connect with fellow students and join study groups</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Study Groups */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Study Groups</h2>
              <Button className="glow-button">
                <Plus className="h-4 w-4 mr-2" />
                Create Group
              </Button>
            </div>
            
            <div className="grid gap-4">
              {groups.map((group) => (
                <Card key={group.id} className="glass-card">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          {group.name}
                          {group.isJoined && <Crown className="h-4 w-4 text-yellow-500" />}
                        </CardTitle>
                        <CardDescription>{group.description}</CardDescription>
                      </div>
                      <Badge variant={group.activity === "Very Active" ? "default" : "secondary"}>
                        {group.activity}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{group.members} members</span>
                      </div>
                      <Button 
                        variant={group.isJoined ? "secondary" : "default"}
                        size="sm"
                      >
                        {group.isJoined ? "Joined" : "Join Group"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Discussions */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Recent Discussions</h2>
            
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card key={discussion.id} className="glass-card">
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <h3 className="font-medium hover:text-primary cursor-pointer">
                        {discussion.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {discussion.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{discussion.author}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{discussion.group}</span>
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-3 w-3" />
                          <span>{discussion.replies}</span>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground">{discussion.time}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}