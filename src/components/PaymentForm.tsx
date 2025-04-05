import { CreditCard } from "lucide-react";
import { Plan } from "./PlanSelector";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface PaymentFormProps {
    selectedPlan: Plan | undefined;
    isNewUser?: boolean;
    onSubmit: (e: React.FormEvent) => void;
}

export default function PaymentForm ({ selectedPlan, isNewUser, onSubmit }: PaymentFormProps) {
    const [isProcessing, setIsProcessing] = useState(false);
    
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

            </form>
        </Card>
    )
}