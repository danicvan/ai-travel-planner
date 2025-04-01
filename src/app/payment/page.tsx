import OrderSummary from "@/components/OrderSummary";
import PlanFeatures from "@/components/PlanFeatures";
import PlanSelector from "@/components/PlanSelector";

export default function PaymentPage () {
    return (
        <>
            <h1>PaymentPage</h1>
            <PlanSelector />
            <PlanFeatures />
            <OrderSummary />
        </>
    )
}