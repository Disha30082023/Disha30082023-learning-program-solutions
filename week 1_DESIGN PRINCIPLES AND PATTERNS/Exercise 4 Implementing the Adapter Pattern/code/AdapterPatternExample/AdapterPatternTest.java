public class AdapterPatternTest {
    public static void main(String[] args) {
        PaymentProcessor payPalProcessor = new PayPalAdapter();
        payPalProcessor.processPayment(100.0);
        PaymentProcessor stripeProcessor = new StripeAdapter();
        stripeProcessor.processPayment(200.0);
    }
}
