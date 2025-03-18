import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Título do Card</CardTitle>
                    <CardDescription>Descrição do Card</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Este é o conteúdo do card.</p>
                </CardContent>
                <CardFooter>
                    <p>Rodapé do Card</p>
                </CardFooter>
            </Card>
        </div>
    );
}