"use client";

import { Building, CreditCard, Loader2, Lock, QrCode, Wallet } from "lucide-react";
import { Plan } from "./PlanSelector";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import OrderSummary from "./OrderSummary";
import { Button } from "./ui/button";

interface PaymentFormProps {
    selectedPlan: Plan | undefined;
    isNewUser?: boolean;
    onSubmit: (e: React.FormEvent) => void;
}

export default function PaymentForm ({ selectedPlan, isNewUser, onSubmit }: PaymentFormProps) {
    const [isProcessing, setIsProcessing] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState("credit-card");
    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [pixKey, setPixKey] = useState("");
    const [bankName, setBankName] = useState("");
    const [bankAccount, setBankAccount] = useState("");
    const [bankBranch, setBankBranch] = useState("");

    const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        const formattedValue = value
            .replace(/(.{4})/g, "$1 ")
            .trim();
        setCardNumber(formattedValue);
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

    const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");

        if (value.length <= 2) {
            setExpiryDate(value);
        } else {
            const month = value.substring(0, 2);
            const year = value.substring(2, 4);
            setExpiryDate(`${month}/${year}`);
        }
    };

    const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\D/g, "");
        setCvv(value);
    }
    
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

                            <div className="space-y-2">
                                <Label htmlFor="card-name">Cardholder Name</Label>
                                <Input
                                    id="card-name"
                                    placeholder="John Doe"
                                    value={cardName}
                                    onChange={(e) => setCardName(e.target.value)}
                                    required={paymentMethod === "credit-card"}
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="expire-date">Expiry Date</Label>
                                    <Input 
                                        id="expiry-date"
                                        placeholder="MM/YY"
                                        value={expiryDate}
                                        onChange={handleExpiryDateChange}
                                        maxLength={5}
                                        required={paymentMethod === "credit-card"}
                                    />
                                </div>
                            
                                <div className="space-y-2">
                                    <Label htmlFor="cvv">CVV</Label>
                                    <Input 
                                        id="cvv"
                                        placeholder="123"
                                        value={cvv}
                                        onChange={handleCvvChange}
                                        maxLength={3}
                                        required={paymentMethod === "credit-card"}
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="pix" className="space-y-4">
                            <div className="space-y-2">
                                <Label>PIX Key</Label>
                                <Input 
                                    id="pix-key"
                                    placeholder="Your PIX key"
                                    value={pixKey}
                                    onChange={(e) => setPixKey(e.target.value)}
                                    required={paymentMethod === "pix"}
                                />
                            </div>
                            <div className="p-6 border border-dashed rounded-md flex flex-col items-center justify-center space-y-2">
                                <QrCode className="h-24 w-24 text-primary/50"/>
                                <p className="text-sm text-muted-foreground text-center">
                                    Use your banking app to scan the QR code that will be generated after confirmation
                                </p>
                            </div>
                        </TabsContent>

                        <TabsContent value="bank" className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="bank-name">Bank Name</Label>
                                <Input 
                                    id="bank-name"
                                    placeholder="Bank Name"
                                    value={bankName}
                                    onChange={(e) => setBankName(e.target.value)}
                                    required={paymentMethod === "bank"}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="account-number">Account Number</Label>
                                <Input 
                                    id="account-number"
                                    placeholder="Your account number"
                                    value={bankAccount}
                                    onChange={(e) => setBankAccount(e.target.value)}
                                    required={paymentMethod === "bank"}
                                />
                            </div>
                            <div>
                                <Label>Branch Code</Label>
                                <Input 
                                    id="branch-code"
                                    placeholder="Branch code"
                                    value={bankBranch}
                                    onChange={(e) => setBankBranch(e.target.value)}
                                    required={paymentMethod === "bank"}
                                />
                            </div>
                        </TabsContent>

                        <TabsContent value="paypal" className="space-y-4">
                            <div className="p-6 border border-dashed rounded-md flex flex-col items-center justify-center space-y-4">
                                <Wallet className="h-16 w-16 text-primary/50"/>
                                <p className="text-sm text-muted-foreground text-center">
                                    You'll be redirected to Paypal to complete your payment after clicking the subscribe button
                                </p>
                                <div className="bg-[#0070ba] text-white py-2 px-4 rounded text-sm font-medium inline-flex items-center gap-2">
                                    <span>Powered by</span>
                                    <span className="font-bold">PayPal</span>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>

                    {selectedPlan && <OrderSummary plan={selectedPlan} isNewUser={isNewUser} />}

                    <div className="flex items-center text-sm text-muted-foreground">
                        <Lock className="h-3 w-3 mr-1"/>
                        Payments are secure and encrypted
                    </div>
                </CardContent>

                <CardFooter>
                    <Button type="submit" className="w-full" disabled={isProcessing}>
                        {isProcessing ? (
                            <>
                                <Loader2 className="h-4 w-4 mr-2 animate-spin"/>
                                Processing...
                            </>
                        ) : paymentMethod === "paypal" ? (
                            "Continue to Paypal"
                        ) : (
                            isNewUser ? "Subscribe with Discount" : "Subscribe Now"
                        )}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    );
}