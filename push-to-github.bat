@echo off
cd /d "%~dp0"
git add .
git commit -m "Fix: remove Base44 auth wrapper causing blank page"
git push
pause
