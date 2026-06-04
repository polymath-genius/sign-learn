import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Link } from "react-router"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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

export default function Profile() {
    return (
        <div className="flex flex-col p-4 min-h-screen">
            <h1 className="text-2xl font-bold">User Profile</h1>
            <p className="text-sm text-muted-foreground">Profile information</p>
            <div className="flex flex-col gap-4 mt-4">
                <Card>
                    <CardContent>
                        <div className="flex gap-4 items-center">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src="abc" />
                                <AvatarFallback className="text-4xl font-bold bg-green-400 text-white">JD</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col gap-2">
                                <h5 className="text-2xl font-bold">John Doe</h5>
                                <p className="text-sm text-muted-foreground">johndoe22@gmail.com</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
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