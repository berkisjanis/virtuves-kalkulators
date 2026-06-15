@echo off
cd /d "%~dp0"
git add .
git commit -m "SEO: canonical URL, Twitter Card, sitemap, robots.txt"
git push
pause
