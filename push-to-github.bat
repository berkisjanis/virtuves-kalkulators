@echo off
cd /d "%~dp0"
git add .
git commit -m "Add Google Analytics GA4 tracking"
git push
pause
