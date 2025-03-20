"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@headlessui/react";
import { Separator } from "@radix-ui/react-separator";
import { CircleUser, Github } from "lucide-react";
import { useState } from "react";

export default function HomePage() {
    const [login, setLogin] = useState(false);

    const handleProviderLogin = (state: boolean) => {
        setLogin(state);
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-md mx-auto">
                <CardHeader className="space-y-1">
                    <CardTitle className="text-2x1 font-bold">Sign in</CardTitle>
                    <CardDescription>
                        Sign in yo your account to continue
                    </CardDescription>
                </CardHeader>
            
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Button
                            className="w-full"
                            type="button"
                            disabled={login}
                            onClick={() => handleProviderLogin(true)}
                        >
                            <Github className="mr-2 h-4 w-4"/>
                            Continue with GitHub
                        </Button>
                        <Button
                            className="w-full"
                            type="button"
                            disabled={login}
                            onClick={() => handleProviderLogin(true)}
                        >
                        <CircleUser className="mr-2 h-4 w-4"/>
                        Continue with Google
                        </Button>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <Separator className="w-full"/>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <p className="text-sm text-muted-foreground text-center w-full">
                        Don't have an account?{" "}
                        <a
                            className="text-primary hover:text-primary/90 font-medium"
                        >
                            Create Account
                        </a>
                    </p> 
                </CardFooter>
            </Card>
        </div>
    )
}