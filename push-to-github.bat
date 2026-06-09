@echo off
cd /d "%~dp0"
git config --global user.email "jb@ited.lv"
git config --global user.name "Janis"
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/berkisjanis/virtuves-kalkulators.git
git branch -M main
git push -u origin main
pause
