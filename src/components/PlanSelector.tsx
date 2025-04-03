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

export default function PlanSelector() {
    return (
        <h1>PlanSelector</h1>
    )
}