#!/usr/bin/env pwsh
Write-Host "🚀 Running QA Automation Tests..." -ForegroundColor Cyan

$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$reportPath = ".\reports\test-report-$timestamp.html"

Write-Host "📊 Test execution started at: $(Get-Date)" -ForegroundColor Yellow

newman run data-driven-testing.json `
  -e qa-env.json `
  -d test-users.csv `
  -r htmlextra,cli `
  --reporter-htmlextra-export $reportPath `
  --reporter-htmlextra-darkTheme

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ All tests passed!" -ForegroundColor Green
    Write-Host "📄 Report saved: $reportPath" -ForegroundColor Green
    Write-Host "📊 Open report: file:///$((Get-Location).Path.Replace('\','/'))/reports/test-report-$timestamp.html" -ForegroundColor Cyan
} else {
    Write-Host "`n❌ Some tests failed. Check report for details." -ForegroundColor Red
    Write-Host "📄 Report saved: $reportPath" -ForegroundColor Yellow
}

Write-Host "`n✨ Test execution completed at: $(Get-Date)" -ForegroundColor Yellow