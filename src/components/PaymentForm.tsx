import { Plan } from "./PlanSelector";

interface PaymentFormProps {
    selectedPlan: Plan | undefined;
    isNewUser?: boolean;
    onSubmit: (e: React.FormEvent) => void;
}

export default function PaymentForm () {
    return (
        <h1>PaymentForm</h1>
    )
}