import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
} from "@/components/ui/combobox"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState } from "react"

const language = ["English", "Hindi", "Bengali"]

export default function Translation() {

    const [mode,setMode]=useState("stot")

    return (
        <div className="flex flex-col p-4 min-h-screen">
            <h1 className="text-2xl font-bold">Real-Time Sign Language Translation</h1>
            <p className="text-sm text-muted-foreground">Live sign detection and translation to English and Indian languages</p>
            <div className="flex gap-2"><Switch onCheckedChange={()=>setMode(mode==="stot"?"ttos":"stot")}/><Label>{mode==="stot"?"Sign to Text":"Text to Sign"}</Label></div>
            {mode==="stot"&&<div className="flex flex-col gap-4 mt-4">
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
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Translation</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input className="pt-4 pb-25"/>
                            <div className="flex gap-2 items-center">
                                <Button>Speak</Button>
                                <Combobox items={language}>
                                    <ComboboxInput placeholder="Select a framework" />
                                    <ComboboxContent>
                                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                                        <ComboboxList>
                                            {(item) => (
                                                <ComboboxItem key={item} value={item}>
                                                    {item}
                                                </ComboboxItem>
                                            )}
                                        </ComboboxList>
                                    </ComboboxContent>
                                </Combobox>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>}
            {mode==="ttos"&&<div className="flex flex-col gap-4 mt-4">
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Translation</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Input className="pt-4 pb-25"/>
                            <div className="flex gap-2 items-center">
                                <Button>Speak</Button>
                                <Combobox items={language}>
                                    <ComboboxInput placeholder="Select a framework" />
                                    <ComboboxContent>
                                        <ComboboxEmpty>No items found.</ComboboxEmpty>
                                        <ComboboxList>
                                            {(item) => (
                                                <ComboboxItem key={item} value={item}>
                                                    {item}
                                                </ComboboxItem>
                                            )}
                                        </ComboboxList>
                                    </ComboboxContent>
                                </Combobox>
                            </div>
                        </CardContent>
                    </Card>
                </div>
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
            </div>}
        </div>
    );
}