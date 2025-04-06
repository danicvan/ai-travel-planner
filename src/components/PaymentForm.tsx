import { Building, CreditCard, QrCode, Wallet } from "lucide-react";
import { Plan } from "./PlanSelector";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Label } from "@headlessui/react";
import { Input } from "./ui/input";

interface PaymentFormProps {
    selectedPlan: Plan | undefined;
    isNewUser?: boolean;
    onSubmit: (e: React.FormEvent) => void;
}

export default function PaymentForm ({ selectedPlan, isNewUser, onSubmit }: PaymentFormProps) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("credit-card");
    const [cardNumber, setCardName] = useState("");
    
    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        const formattedValue = value
            .replace(/(.{4})/g, "$1 ")
            .trim();
        setCardName(formattedValue);
    };

    const handlePaymentSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsProcessing(true);

        setTimeout(() => {
            setIsProcessing(false);

            toast({
                title: "Payment successful",
                description: `You are now subscribed to the ${selectedPlan?.name}!`,
            });

            onSubmit(e);
        }, 2000);
    };
    
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5">
                        Payment Details
                    </CreditCard>
                </CardTitle>
                <CardDescription>Select your preferred payment method</CardDescription>
            </CardHeader>
            <form onSubmit={handlePaymentSubmit}>
                <CardContent className="space-y-4">
                    <Tabs defaultValue="credit-card" onValueChange={setPaymentMethod} className="w-full">
                        <TabsList className="grid grid-cols-4 mb-4">
                            <TabsTrigger value="credit-card">
                                <CreditCard className="h-4 w-4 mr-2" />
                                    Credit Card
                            </TabsTrigger>
                            <TabsTrigger value="pix">
                                <QrCode className="h-4 w-4- mr-2" />
                                    PIX
                            </TabsTrigger>
                            <TabsTrigger value="bank">
                                <Building className="h-4 w-4 mr-2" />
                                    Bank Transfer
                            </TabsTrigger>
                            <TabsTrigger value="paypal">
                                <Wallet className="h-4 w-4 mr-2" />
                                    Paypal
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="credit-card" className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="card-number">Card Number</Label>
                                <div className="relative">
                                    <Input 
                                        id="card-number"
                                        placeholder="1234 5678 9012 3456"
                                        value={cardNumber}
                                        onChange={handleCardNumberChange}
                                        maxLength={19}
                                        required={paymentMethod === "credit-card"}
                                    />
                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                                        <CreditCard className="h-4 w-4" />
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </CardContent>
            </form>
        </Card>
    )
}