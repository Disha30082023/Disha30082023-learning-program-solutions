public class RealImage implements Image{
    private String filename;
    public RealImage(String filename) {
        loadImageFromServer();
        this.filename = filename;
    }
    private void loadImageFromServer() {
        // Simulating a delay for loading the image
        System.out.println("Loading image: " + filename);
    }
    @Override
    public void display() {
        System.out.println("Displaying image: " + filename);
    }
}
