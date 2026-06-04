import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Image, Search } from "lucide-react"
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
import SearchSign from "../components/search-sign"
import { useState } from "react"

const signs = [
    {
        title: "Hello",
        category: "Word"
    },
    {
        title: "A",
        category: "Alphabet"
    },
    {
        title: "Family",
        category: "Word"
    },
    {
        title: 2,
        category: "Number"
    },
    {
        title: "W",
        category: "Alphabet"
    },
]

export default function Dictionary() {

    const [search,setSearch]=useState(false)

    return (
        <div className="flex flex-col p-4 min-h-screen">
        <SearchSign show={search} setShow={setSearch}/>
            <h1 className="text-2xl font-bold">Sign Dictionary</h1>
            <p className="text-sm text-muted-foreground">Search signs by name and category</p>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-2">
                    <div className="flex items-center -space-x-4 flex-1">
                        <Search size={15} />
                        <Input placeholder="Search Signs" className="pl-6 py-6" />
                    </div>
                    <Button onClick={()=>setSearch(true)}>
                        <div className="flex items-center gap-2"><Image />Image</div>
                    </Button>
                    <Select value="all">
                        <SelectTrigger>
                            <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="top-10">
                            <SelectGroup>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="alphabet">Alphabet</SelectItem>
                                <SelectItem value="number">Number</SelectItem>
                                <SelectItem value="word">Word</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    {signs.map((val, idx) =>
                        <Card key={idx}>
                            <CardHeader>
                                <img src="abc" alt="Sign Image" className="text-center bg-muted py-15 rounded-xl" />
                            </CardHeader>
                            <CardContent>
                                <h5 className="font-semibold">{val.title}</h5>
                                <p className="text-xs text-muted-foreground">{val.category}</p>
                            </CardContent>
                        </Card>)
                    }
                </div>
            </div>
        </div>
    );
}