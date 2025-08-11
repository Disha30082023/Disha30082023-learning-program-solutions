## Instructions

> Each step is executed using **Git Bash**

1. Verify if master is in clean state:
   ```bash
   git status
   ```

2. Create a new branch:
   ```bash
   git checkout -b GitWork
   ```

3. Add a file `hello.xml`:
   ```bash
   echo "<message>Hello from GitWork</message>" > hello.xml
   git add hello.xml
   git status
   ```

4. Commit the changes:
   ```bash
   git commit -m "Added hello.xml in GitWork"
   ```

5. Switch back to master:
   ```bash
   git checkout master
   ```

6. Add a different version of `hello.xml`:
   ```bash
   echo "<message>Hello from Master</message>" > hello.xml
   git add hello.xml
   git commit -m "Added hello.xml in master"
   ```

7. Observe the log:
   ```bash
   git log --oneline --graph --decorate --all
   ```

8. Check differences using Git:
   ```bash
   git diff GitWork
   ```

9. View visual differences using P4Merge:
   ```bash
   git difftool master GitWork
   ```

10. Merge the branch into master:
    ```bash
    git merge GitWork
    ```

11. Resolve the conflict using a 3-way merge tool (e.g., P4Merge or other GUI tools).

12. After resolving conflict, mark the file as resolved:
    ```bash
    git add hello.xml
    git commit -m "Resolved merge conflict for hello.xml"
    ```

13. Add backup file (if any) to `.gitignore`:
    ```bash
    echo "*.orig" >> .gitignore
    git add .gitignore
    git commit -m "Updated .gitignore to exclude backup files"
    ```

14. List all branches:
    ```bash
    git branch -a
    ```

15. Delete the merged branch:
    ```bash
    git branch -d GitWork
    ```

16. Final log observation:
    ```bash
    git log --oneline --graph --decorate
    ```

---
