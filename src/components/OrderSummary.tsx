import { Plan } from "./PlanSelector";
import { Separator } from "./ui/separator";

interface OrderSummaryProps {
    plan: Plan;
    isNewUser?: boolean;
}

export default function OrderSummary ({ plan, isNewUser }: OrderSummaryProps) {
    return (
        <div className="pt-4">
            <div className="bg-muted/50 p-4 rounded-md">
                <h3 className="font-medium mb-2">Order Summary</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">{plan.name}</span>
                        <span>{plan.price}/month</span>
                    </div>

                    {isNewUser && (
                        <div className="flex justify-between text-sm">
                            <span className="text-emerald-600 font-medium">New user discount</span>
                            <span className="text-emerald-600">-$5.00</span>
                        </div>
                    )}

                    <Separator />
                    <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span className="text-primary">
                            ${isNewUser ? (plan.price -5).toFixed(2) : plan.price}/month
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}