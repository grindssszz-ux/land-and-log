import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Clock, 
  BookOpen, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  CheckSquare,
  User,
  Mail,
  Phone,
  GraduationCap,
  LogOut,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock data
const personalInfo = {
  name: "Alex Johnson",
  email: "alex.johnson@student.edu",
  phone: "+1 (555) 123-4567",
  currentClass: "Computer Science - Semester 6",
  examDate: "2024-05-15",
  daysLeft: 45
};

const subjectProgress = [
  { subject: "Data Structures", progress: 85, total: 12, completed: 10 },
  { subject: "Algorithms", progress: 70, total: 15, completed: 11 },
  { subject: "Database Systems", progress: 60, total: 10, completed: 6 },
  { subject: "Web Development", progress: 90, total: 8, completed: 7 },
  { subject: "Machine Learning", progress: 45, total: 20, completed: 9 }
];

const chapterAnalysis = [
  { chapter: "Binary Trees", subject: "Data Structures", strength: "strong", score: 92 },
  { chapter: "Dynamic Programming", subject: "Algorithms", strength: "weak", score: 35 },
  { chapter: "SQL Joins", subject: "Database Systems", strength: "strong", score: 88 },
  { chapter: "React Hooks", subject: "Web Development", strength: "strong", score: 95 },
  { chapter: "Neural Networks", subject: "Machine Learning", strength: "weak", score: 40 },
  { chapter: "Graph Algorithms", subject: "Algorithms", strength: "weak", score: 45 },
];

const initialTodos = {
  daily: [
    { id: 1, task: "Review Data Structures notes", completed: false },
    { id: 2, task: "Complete Algorithm practice problems", completed: true },
    { id: 3, task: "Read Database chapter 5", completed: false },
    { id: 4, task: "Work on React project", completed: false }
  ],
  weekly: [
    { id: 5, task: "Complete Machine Learning assignment", completed: false },
    { id: 6, task: "Prepare for Database midterm", completed: true },
    { id: 7, task: "Review all weak chapters", completed: false },
    { id: 8, task: "Update project documentation", completed: false }
  ],
  monthly: [
    { id: 9, task: "Complete final project", completed: false },
    { id: 10, task: "Prepare comprehensive exam notes", completed: false },
    { id: 11, task: "Schedule study group sessions", completed: true },
    { id: 12, task: "Review entire syllabus", completed: false }
  ]
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [studyTime, setStudyTime] = useState(0); // in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [todos, setTodos] = useState(initialTodos);

  // Study timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRunning) {
      interval = setInterval(() => {
        setStudyTime(time => time + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleTimer = () => setIsRunning(!isRunning);
  const resetTimer = () => {
    setIsRunning(false);
    setStudyTime(0);
  };

  const toggleTodo = (period: 'daily' | 'weekly' | 'monthly', id: number) => {
    setTodos(prev => ({
      ...prev,
      [period]: prev[period].map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    }));
  };

  const handleLogout = () => {
    navigate('/');
  };

  const strongChapters = chapterAnalysis.filter(ch => ch.strength === 'strong');
  const weakChapters = chapterAnalysis.filter(ch => ch.strength === 'weak');

  // Chart data
  const subjectChartData = subjectProgress.map(subject => ({
    name: subject.subject.split(' ')[0], // Shortened names for chart
    progress: subject.progress,
    completed: subject.completed,
    total: subject.total
  }));

  const performanceData = chapterAnalysis.map(chapter => ({
    name: chapter.chapter.split(' ')[0], // Shortened names
    score: chapter.score,
    fill: chapter.strength === 'strong' ? '#10b981' : '#ef4444'
  }));

  const COLORS = ['#10b981', '#ef4444'];

  return (
    <div className="min-h-screen bg-gradient-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header with Theme Toggle and Logout */}
        <div className="flex justify-between items-center">
          <div className="text-center flex-1">
            <h1 className="text-4xl font-bold text-foreground mb-2">Student Dashboard</h1>
            <p className="text-muted-foreground">Track your academic progress and study goals</p>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="bg-glass backdrop-blur-md border-glass text-foreground hover:bg-glass/80"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>

        {/* Personal Information Card */}
        <Card className="bg-glass backdrop-blur-md border-glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <User className="w-5 h-5" />
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{personalInfo.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{personalInfo.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Current Class</p>
                  <p className="font-medium text-foreground">{personalInfo.currentClass}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Days Left for Exam</p>
                  <p className="font-bold text-2xl gradient-text">{personalInfo.daysLeft}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Subject Progress */}
          <Card className="lg:col-span-2 bg-glass backdrop-blur-md border-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <BookOpen className="w-5 h-5" />
                Subject-wise Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {subjectProgress.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{subject.subject}</span>
                    <span className="text-sm text-muted-foreground">
                      {subject.completed}/{subject.total} chapters
                    </span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                  <div className="text-right text-sm text-muted-foreground">
                    {subject.progress}% complete
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Study Timer */}
          <Card className="bg-glass backdrop-blur-md border-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Clock className="w-5 h-5" />
                Study Timer
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <div className="text-4xl font-bold gradient-text">
                {formatTime(studyTime)}
              </div>
              <div className="flex justify-center gap-2">
                <Button
                  onClick={toggleTimer}
                  className="glow-button"
                  size="sm"
                >
                  {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button
                  onClick={resetTimer}
                  variant="outline"
                  size="sm"
                  className="bg-glass border-glass text-foreground hover:bg-glass/80"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Total study time today
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Subject Progress Chart */}
          <Card className="bg-glass backdrop-blur-md border-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <BarChart3 className="w-5 h-5" />
                Subject Progress Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={subjectChartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted-foreground/20" />
                  <XAxis 
                    dataKey="name" 
                    className="text-xs fill-muted-foreground"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    className="text-xs fill-muted-foreground"
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                    formatter={(value, name) => [
                      name === 'progress' ? `${value}%` : value,
                      name === 'progress' ? 'Progress' : name === 'completed' ? 'Completed' : 'Total'
                    ]}
                  />
                  <Bar dataKey="progress" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Performance Analysis Chart */}
          <Card className="bg-glass backdrop-blur-md border-glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <TrendingUp className="w-5 h-5" />
                Chapter Performance Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-muted-foreground/20" />
                  <XAxis 
                    dataKey="name" 
                    className="text-xs fill-muted-foreground"
                    tick={{ fontSize: 12 }}
                  />
                  <YAxis 
                    className="text-xs fill-muted-foreground"
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                      color: 'hsl(var(--foreground))'
                    }}
                    formatter={(value) => [`${value}%`, 'Score']}
                  />
                  <Bar dataKey="score" radius={[4, 4, 0, 0]}>
                    {performanceData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Chapter Analysis */}
        <Card className="bg-glass backdrop-blur-md border-glass">
          <CardHeader>
            <CardTitle className="text-foreground">Chapter Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strong Chapters */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Strong Chapters
                </h3>
                <div className="space-y-3">
                  {strongChapters.map((chapter, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                      <div>
                        <p className="font-medium text-foreground">{chapter.chapter}</p>
                        <p className="text-sm text-muted-foreground">{chapter.subject}</p>
                      </div>
                      <Badge variant="secondary" className="bg-green-500/20 text-green-700">
                        {chapter.score}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weak Chapters */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-4">
                  <TrendingDown className="w-5 h-5 text-red-500" />
                  Weak Chapters
                </h3>
                <div className="space-y-3">
                  {weakChapters.map((chapter, index) => (
                    <div key={index} className="flex justify-between items-center p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                      <div>
                        <p className="font-medium text-foreground">{chapter.chapter}</p>
                        <p className="text-sm text-muted-foreground">{chapter.subject}</p>
                      </div>
                      <Badge variant="secondary" className="bg-red-500/20 text-red-700">
                        {chapter.score}%
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plans and Todo Lists */}
        <Card className="bg-glass backdrop-blur-md border-glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-foreground">
              <CheckSquare className="w-5 h-5" />
              Study Plans & Todo Lists
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="daily" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-glass">
                <TabsTrigger value="daily" className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Daily</TabsTrigger>
                <TabsTrigger value="weekly" className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Weekly</TabsTrigger>
                <TabsTrigger value="monthly" className="text-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">Monthly</TabsTrigger>
              </TabsList>

              {(['daily', 'weekly', 'monthly'] as const).map((period) => (
                <TabsContent key={period} value={period} className="space-y-3 mt-4">
                  {todos[period].map((todo) => (
                    <div key={todo.id} className="flex items-center space-x-3 p-3 rounded-lg bg-background/50 border border-glass">
                      <Checkbox
                        checked={todo.completed}
                        onCheckedChange={() => toggleTodo(period, todo.id)}
                      />
                      <span className={`flex-1 ${todo.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                        {todo.task}
                      </span>
                    </div>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;