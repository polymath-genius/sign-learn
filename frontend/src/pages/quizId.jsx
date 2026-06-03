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

const questions = [
    {
        question:"How many parts does the brain have?",
        options:[1,2,3,4]
    },
    // {
    //     question:"Which part of the brain is responsible for memory?",
    //     options:["Cerebrum","Cerebellum","Medulla Oblongata","Pons"]
    // },
    // {
    //     question:"How many parts does the brain have?",
    //     options:[1,2,3,4]
    // },
    // {
    //     question:"Which part of the brain is responsible for memory?",
    //     options:["Cerebrum","Cerebellum","Medulla Oblongata","Pons"]
    // },
]

export default function QuizId() {
    return (
        <div className="flex flex-col p-4 min-h-screen">
            <h1 className="text-2xl font-bold">The Brain</h1>
            <p className="text-sm text-muted-foreground">Learn about the structure and functions of the brain</p>
            <div className="flex flex-col gap-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                {questions.map((val,idx)=>
                    <Card key={idx}>
                        <CardHeader>
                            <CardTitle>{key}. {val.question}</CardTitle>
                        </CardHeader>
                        <CardContent>
                        {
                            val.options.map((option,numbering)=>
                            <div className="rounded-xl p-3 text-sm" key={numbering}>{numbering}. {option}</div>
                            )
                        }
                        </CardContent>
                    </Card>
                )}
                </div>
            </div>
        </div>
    );
}