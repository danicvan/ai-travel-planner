import { Label } from "@headlessui/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

export interface Plan {
    id: string;
    name: string;
    price: number;
    features: string[];
}

interface PlanSelectorProps {
    plans: Plan[];
    selectedPlan: string;
    setSelectedPlan: (plan: string) => void;
}

export default function PlanSelector({ plans, selectedPlan, setSelectedPlan}: PlanSelectorProps){
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Choose a Plan
                </CardTitle>
                <CardDescription>
                    Select the plan that works for you
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RadioGroup value={selectedPlan} onValueChange={setSelectedPlan} className="space-y-4">
                    {plans.map(plan => (
                        <div key={plan.id} className={`flex items-center space-x-2 rounded-md border p-4 ${selectedPlan === plan.id ? 'border-primary' : 'border-input'}`}>
                            <RadioGroupItem value ={plan.id} id={plan.id}/>
                            <Label htmlFor={plan.id} className="flex flex-col gap-1 cursor-pointer flex-1" >
                                <span className="font-medium">{plan.name}</span>
                                <span className="text-primary text-lg font-bold">${plan.price}/month</span>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
}