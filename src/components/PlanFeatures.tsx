import { Check } from "lucide-react";
import { Plan } from "./PlanSelector";

interface PlanFeaturesProps {
    plan: Plan;
}

export default function PlanFeatures ({ plan }: PlanFeaturesProps) {
    return (
        <div>
            <h3 className="font-medium mb-2">What is included in {plan.name}:</h3>
            <ul className="space-y-2">
                {plan.features.map((feature, index) => (
                    <li key={index}>
                        <Check className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0"/>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}