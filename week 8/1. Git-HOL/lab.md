
# GitDemo Hands-On Lab

This project was created as part of a Hands-On Lab to learn Git, configure editors, and upload to both GitLab and GitHub.

---

## Git Configuration

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

---

## Initialize Project

```bash
mkdir GitDemo
cd GitDemo
git init
echo "Welcome to Git Hands-On Lab" > welcome.txt
```

---

## Stage and Commit

```bash
git add welcome.txt
git commit -m "Initial commit with welcome.txt"
```

---

## Set Notepad++ as Default Git Editor (Optional)

```bash
git config --global core.editor "'C:/Program Files (x86)/Notepad++/notepad++.exe' -multiInst -notabbar -nosession -noPlugin"
```

---

## GitLab Remote (Initial)

```bash
git remote add origin https://gitlab.com/yourname/GitDemo.git
git push -u origin master
```

---

## Switch to GitHub Remote

```bash
git remote remove origin
git remote add origin https://github.com/yourusername/GitDemo.git
git push -u origin master
```

---

## Project Files

```bash
GitDemo/
├── welcome.txt
├── README.md
```

---

## Notes

- Practiced Git basics, setting up Notepad++, and working with remotes.
- Started on GitLab and later migrated the same project to GitHub.
- Now tracked by `origin/master` on GitHub.
