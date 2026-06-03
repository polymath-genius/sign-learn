import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Link } from "react-router"

const course = [
    {
        topic: "India's Freedom Struggle",
        subject: "History",
        progress: 80
    },
    {
        topic: "Newton's Laws of Motion",
        subject: "Science",
        progress: 80
    },
    {
        topic: "Profit and Loss",
        subject: "Maths",
        progress: 80
    },
    {
        topic: "The Brain",
        subject: "Science",
        progress: 80
    },
    {
        topic: "Unitary Method",
        subject: "Maths",
        progress: 80
    }
]

export default function Courses() {
    return (
        <div className="flex flex-col p-4 min-h-screen">
            <h1 className="text-2xl font-bold">Courses</h1>
            <p className="text-sm text-muted-foreground">Choose a subject and continue learning</p>
            <div className="flex flex-col gap-4 mt-4">
                <Tabs defaultValue="account" className="mx-auto">
                    <TabsList>
                        <TabsTrigger value="account">All</TabsTrigger>
                        <TabsTrigger value="password">English</TabsTrigger>
                        <TabsTrigger value="password">Science</TabsTrigger>
                        <TabsTrigger value="password">Maths</TabsTrigger>
                        <TabsTrigger value="password">History</TabsTrigger>
                    </TabsList>
                </Tabs>
                <div className="grid grid-cols-4 gap-4">
                    {course.map((val, idx) =>
                        <Card key={idx}>
                            <CardHeader>
                                <CardTitle className="text-lg">{val.topic}</CardTitle>
                                <p className="text-xs text-muted-foreground">{val.subject}</p>
                            </CardHeader>
                            <CardContent>
                                <Progress value={val.progress} />
                                <div className="flex items-center gap-2">
                                    <Button asChild className="mt-4 flex-1">
                                        <Link to={`/course/${1}`}>
                                            Continue
                                        </Link>
                                    </Button>
                                    <Button asChild className="mt-4 flex-1">
                                        <Link to={`/quiz/${1}`}>
                                            Quiz {"->"}
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>)
                    }
                </div>
            </div>
        </div>
    );
}