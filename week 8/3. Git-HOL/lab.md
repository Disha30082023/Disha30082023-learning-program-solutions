### Branching

1. Create a new branch:
   ```bash
   git branch GitNewBranch
   ```

2. List all local and remote branches:
   ```bash
   git branch -a
   ```
   > Note: The `*` indicates the currently checked out branch.

3. Switch to the new branch:
   ```bash
   git checkout GitNewBranch
   ```

4. Add some files and content:
   ```bash
   echo "Sample content" > file.txt
   git add file.txt
   ```

5. Commit the changes:
   ```bash
   git commit -m "Added sample file in GitNewBranch"
   ```

6. Check status:
   ```bash
   git status
   ```

---

### Merging

1. Switch back to master:
   ```bash
   git checkout master
   ```

2. View CLI differences between trunk and branch:
   ```bash
   git diff GitNewBranch
   ```

3. View visual differences using P4Merge:
   ```bash
   git difftool master GitNewBranch
   ```

4. Merge the branch into master:
   ```bash
   git merge GitNewBranch
   ```

5. Observe the log after merging:
   ```bash
   git log --oneline --graph --decorate
   ```

6. Delete the merged branch:
   ```bash
   git branch -d GitNewBranch
   ```

7. Final status check:
   ```bash
   git status
   ```

---
