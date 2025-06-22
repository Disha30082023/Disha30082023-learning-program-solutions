public class ObserverPatternTest {
    public static void main(String[] args) {
        StockMarket stockMarket = new StockMarket();
        MobileApp mobileApp = new MobileApp();
        WebApp webApp = new WebApp();
        stockMarket.registerObserver(mobileApp);
        stockMarket.registerObserver(webApp);
        
        stockMarket.setStockPrice(100.50);
        stockMarket.setStockPrice(102.75);
        
        
        stockMarket.deregisterObserver(mobileApp);
        stockMarket.setStockPrice(105.00);
    }
}
