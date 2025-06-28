import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;

public class MyServiceTest2 {

    @Test
    public void testVerifyInteraction() {
        // Arrange
        ExternalApi mockApi = mock(ExternalApi.class);

        // Act
        MyService service = new MyService(mockApi);
        service.fetchData();

        // Assert
        verify(mockApi).getData();
    }
}
