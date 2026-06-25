@echo off
cd /d "%~dp0"
git add .
git commit -m "Update article and FAQ with proofread content"
git push
pause
