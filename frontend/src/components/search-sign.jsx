import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react";

export default function SearchSign({show,setShow}) {

    const [search,setSearch]=useState("cam")

    return (
        <div className={`${show?"":"hidden"} absolute flex flex-col items-center justify-center min-h-screen bg-transparent w-screen top-0 left-0`}>
        <div className="flex flex-col p-4 border border-muted-foreground rounded-xl bg-white">
        <div className="flex justify-between">
        <div className="justify-between">
            <h1 className="text-2xl font-bold">Sign Dictionary</h1>
            <p className="text-sm text-muted-foreground">Search signs by name and category</p>
        </div>
        <Button onClick={()=>setShow(false)}>X</Button>
        </div>
            <div className="flex items-center justify-around mt-4 font-semibold">
                <div className={`px-2 cursor-pointer ${search==="cam"?"text-blue-400 border-b-4 border-blue-400":""}`} onClick={()=>setSearch("cam")}>Capture from Camera</div>
                <div className={`px-2 cursor-pointer ${search==="upload"?"text-blue-400 border-b-4 border-blue-400":""}`} onClick={()=>setSearch("upload")}>Upload image</div>
            </div>
            <Card className="w-100 h-50 mt-4 p-4 font-bold text-lg flex items-center justify-center">
                <div>Upload</div>
            </Card>
        </div>
        </div>
    );
}