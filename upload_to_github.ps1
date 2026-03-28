# PowerShell Script to help upload to GitHub
Write-Host "--- GitHub Upload Helper for PA69 ---" -ForegroundColor Cyan
Write-Host "1. Please make sure you have Git installed (https://git-scm.com/)"
Write-Host "2. If you don't have Git, please use the Drag & Drop method on the GitHub website."
Write-Host ""
Write-Host "Attempting to initialize and push..." -ForegroundColor Yellow

try {
    git init
    git add .
    git commit -m "Initial PA 2569 Infographic Website"
    git branch -M main
    git remote add origin https://github.com/warunya3545-hash/PA69.git
    git push -u origin main
    Write-Host "Success! Your website should be live soon." -ForegroundColor Green
} catch {
    Write-Host "Error: Git is not installed or you haven't logged in to GitHub on this PC." -ForegroundColor Red
    Write-Host "Please use the manual upload at: https://github.com/warunya3545-hash/PA69/upload/main"
}
pause
