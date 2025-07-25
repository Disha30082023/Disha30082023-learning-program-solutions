// MVCPatternTest.java
public class MVCPatternTest {
    public static void main(String[] args) {
        
        Student student = new Student("John Doe", 1, "A");

        
        StudentView studentView = new StudentView();

        
        StudentController studentController = new StudentController(student, studentView);

        studentController.updateView();

        studentController.setStudentName("Jane Doe");
        studentController.setStudentId(2);
        studentController.setStudentGrade("B");

        studentController.updateView();
    }
}
