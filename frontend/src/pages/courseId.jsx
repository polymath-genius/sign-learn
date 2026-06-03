import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const course = [
    {
        topic:"India's Freedom Struggle",
        subject:"History",
        progress:80
    },
    {
        topic:"Newton's Laws of Motion",
        subject:"Science",
        progress:80
    },
    {
        topic:"Profit and Loss",
        subject:"Maths",
        progress:80
    },
    {
        topic:"The Brain",
        subject:"Science",
        progress:80
    },
    {
        topic:"Unitary Method",
        subject:"Maths",
        progress:80
    }
]

export default function CourseId() {
    return (
        <div className="flex flex-col p-4 min-h-screen">
            <h1 className="text-2xl font-bold">The Brain</h1>
            <p className="text-sm text-muted-foreground">Learn about the structure and functions of the brain</p>
            <div className="flex flex-col gap-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Camera</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-center h-90 rounded-2xl border bg-black text-white items-center">Live Camera</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}