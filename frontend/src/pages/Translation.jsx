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

const language = ["English", "Hindi", "Bengali"]

export default function Translation() {
    return (
        <div className="flex flex-col p-4 min-h-screen">
            <h1 className="text-2xl font-bold">Real-Time Sign Language Translation</h1>
            <p className="text-sm text-muted-foreground">Live sign detection and translation to English and Indian languages</p>
            <div>
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Camera</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="rounded-2xl border bg-black"></div>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Translation</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="rounded-2xl border bg-black">This is the translation.</div>
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
            </div>
        </div>
    );
}