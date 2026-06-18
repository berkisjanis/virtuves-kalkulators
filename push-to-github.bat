@echo off
cd /d "%~dp0"
git add .
git commit -m "Add ads.txt for AdSense"
git push
pause
