public class StripeAdapter implements PaymentProcessor {
    private Stripe stripe;
    public StripeAdapter() {
        this.stripe = new Stripe();
    }
    @Override
    public void processPayment(double amount) {
        stripe.charge(amount);
    }
}
