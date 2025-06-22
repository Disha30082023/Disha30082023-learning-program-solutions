public class StrategyPatternTest {
     public static void main(String[] args) {
        PaymentContext paymentContext = new PaymentContext();
        
        PaymentStrategy creditCardPayment = new CreditCardPayment("1234-5678-9876-5432");
        paymentContext.setPaymentStrategy(creditCardPayment);
        paymentContext.executePayment(150.00);
       
        PaymentStrategy payPalPayment = new PayPalPayment("user@example.com");
        paymentContext.setPaymentStrategy(payPalPayment);
        paymentContext.executePayment(200.00);
    }
}
