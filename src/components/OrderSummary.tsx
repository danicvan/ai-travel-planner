import { Plan } from "./PlanSelector";

interface OrderSummaryProps {
    plan: Plan;
    isNewUser?: boolean;
}

export default function OrderSummary () {
    return (
        <h1>Order Summary</h1>
    )
}