import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
    return (
        <div className="space-y-8 max-w-3x1 mx-auto">
            <div>
                <h1 className="text-3x1 font-bold tracking-tight">About Me</h1>
                <p className="text-muted-foreground mt-1">
                    A bit about my background, passion, and technical skillset.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>My Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                        Today, I focus on backend development, databases, and crafting functional web application.
                    </p>
                </CardContent>
            </Card>
        </div>
    );
}