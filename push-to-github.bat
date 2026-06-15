@echo off
cd /d "%~dp0"
git add .
git commit -m "Add Google Search Console verification"
git push
pause
