@echo off
cd /d "%~dp0"
git add .
git commit -m "Add article section, expand FAQ, add Privacy Policy page"
git push
pause
