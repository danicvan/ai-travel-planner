import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function getStripePaymentStatus(sessionId: string) {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['payment_intent', 'subscription'],
  });

  return {
    status: session.payment_status,
    subscriptionStatus: session.subscription?.status,
  };
}
