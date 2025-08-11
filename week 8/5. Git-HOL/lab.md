## Instructions

> Each step is executed using **Git Bash**

1. Verify if the master branch is in a clean state:
   ```bash
   git status
   ```

2. List out all the available branches:
   ```bash
   git branch -a
   ```

3. Pull the latest updates from the remote repository to master:
   ```bash
   git checkout master
   git pull origin master
   ```

4. Push your changes from this hands-on (`Git-T03-HOL_002`) to the remote:
   ```bash
   git add .
   git commit -m "Completed Git-T03-HOL_002 hands-on lab"
   git push origin master
   ```

5. Confirm if changes are reflected in the remote repository by checking on GitHub or running:
   ```bash
   git log origin/master
   ```

---
