@echo off
cd /d "%~dp0"
git add .
git commit -m "Add Google AdSense script"
git push
pause
