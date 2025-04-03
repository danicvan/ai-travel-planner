import OrderSummary from "@/components/OrderSummary";
import PaymentForm from "@/components/PaymentForm";
import PlanFeatures from "@/components/PlanFeatures";

export default function PaymentPage () {
    return (
        <>
            <h1>PaymentPage</h1>
            <PlanFeatures />
            <OrderSummary />
            <PaymentForm />
        </>
    )
}