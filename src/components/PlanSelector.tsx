export interface Plan {
    id: string;
    name: string;
    price: number;
    features: string[];
}

export default function PlanSelector() {
    return (
        <h1>PlanSelector</h1>
    )
}