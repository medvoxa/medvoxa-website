# ============================================================
#  MEDVOXA Website — PowerShell Deployment Script
#  Drops all files into: C:\Users\DELL\medvoxa-website\frontend_v2
#  Run from: anywhere (uses absolute paths)
# ============================================================

param(
    [string]$SourceRoot = "$PSScriptRoot",
    [string]$DestRoot   = "C:\Users\DELL\medvoxa-website\frontend_v2"
)

$ErrorActionPreference = "Stop"

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  MEDVOXA Website — File Deployment" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# ── Helper: ensure directory exists ──────────────────────────
function EnsureDir([string]$path) {
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
        Write-Host "  Created dir: $path" -ForegroundColor DarkGray
    }
}

# ── Helper: copy a file and report ───────────────────────────
function CopyFile([string]$src, [string]$dest) {
    EnsureDir (Split-Path $dest -Parent)
    Copy-Item -Path $src -Destination $dest -Force
    $rel = $dest.Replace($DestRoot, "").TrimStart("\")
    Write-Host "  ✓ $rel" -ForegroundColor Green
}

# ── Confirm destination ───────────────────────────────────────
Write-Host "Destination: $DestRoot" -ForegroundColor Yellow
Write-Host ""
$confirm = Read-Host "Proceed? Files will be overwritten (y/n)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "Aborted." -ForegroundColor Red
    exit 0
}
Write-Host ""

EnsureDir $DestRoot

# ============================================================
#  ROOT CONFIG FILES
# ============================================================
Write-Host "[1/8] Root config files..." -ForegroundColor Cyan

$rootFiles = @(
    "package.json",
    "next.config.js",
    "tsconfig.json",
    "tailwind.config.ts",
    "postcss.config.js",
    "vercel.json",
    ".env.example"
)

foreach ($f in $rootFiles) {
    $src = Join-Path $SourceRoot $f
    if (Test-Path $src) {
        CopyFile $src (Join-Path $DestRoot $f)
    } else {
        Write-Host "  SKIP (not found): $f" -ForegroundColor DarkYellow
    }
}

# ============================================================
#  APP — GLOBAL STYLES & LAYOUT
# ============================================================
Write-Host ""
Write-Host "[2/8] App: globals, layout, sitemap, robots..." -ForegroundColor Cyan

$appRoot = Join-Path $DestRoot "app"
EnsureDir $appRoot

$appFiles = @(
    "app\globals.css",
    "app\layout.tsx",
    "app\page.tsx",
    "app\not-found.tsx",
    "app\sitemap.ts",
    "app\robots.ts"
)

foreach ($f in $appFiles) {
    $src = Join-Path $SourceRoot $f
    if (Test-Path $src) {
        CopyFile $src (Join-Path $DestRoot $f)
    }
}

# ============================================================
#  APP — PAGE ROUTES
# ============================================================
Write-Host ""
Write-Host "[3/8] App: page routes..." -ForegroundColor Cyan

$pageRoutes = @(
    "app\services\page.tsx",
    "app\solutions\page.tsx",
    "app\specialties\page.tsx",
    "app\pricing\page.tsx",
    "app\company\page.tsx",
    "app\contact\page.tsx",
    "app\security\page.tsx",
    "app\careers\page.tsx"
)

foreach ($f in $pageRoutes) {
    $src = Join-Path $SourceRoot $f
    if (Test-Path $src) {
        CopyFile $src (Join-Path $DestRoot $f)
    }
}

# ============================================================
#  APP — API ROUTES
# ============================================================
Write-Host ""
Write-Host "[4/8] App: API routes..." -ForegroundColor Cyan

CopyFile `
    (Join-Path $SourceRoot "app\api\contact\route.ts") `
    (Join-Path $DestRoot   "app\api\contact\route.ts")

# ============================================================
#  COMPONENTS
# ============================================================
Write-Host ""
Write-Host "[5/8] Components..." -ForegroundColor Cyan

$components = @(
    "components\navbar\Navbar.tsx",
    "components\footer\Footer.tsx",
    "components\contact\ContactForm.tsx"
)

foreach ($f in $components) {
    $src = Join-Path $SourceRoot $f
    if (Test-Path $src) {
        CopyFile $src (Join-Path $DestRoot $f)
    }
}

# ============================================================
#  LOGOS — into public folder
# ============================================================
Write-Host ""
Write-Host "[6/8] Logo files -> public/..." -ForegroundColor Cyan

$publicDir = Join-Path $DestRoot "public"
EnsureDir $publicDir

$logoFiles = @("logo.svg", "logo-dark.svg")
foreach ($f in $logoFiles) {
    $src = Join-Path $SourceRoot $f
    if (Test-Path $src) {
        CopyFile $src (Join-Path $publicDir $f)
    }
}

# ============================================================
#  .GITIGNORE (create if not exists)
# ============================================================
Write-Host ""
Write-Host "[7/8] Creating .gitignore..." -ForegroundColor Cyan

$gitignore = Join-Path $DestRoot ".gitignore"
if (-not (Test-Path $gitignore)) {
@"
# Dependencies
node_modules/
.pnp
.pnp.js

# Next.js
.next/
out/
build/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Vercel
.vercel

# Misc
.DS_Store
*.pem
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# TypeScript
*.tsbuildinfo
next-env.d.ts
"@ | Set-Content $gitignore -Encoding UTF8
    Write-Host "  ✓ .gitignore" -ForegroundColor Green
} else {
    Write-Host "  SKIP .gitignore (already exists)" -ForegroundColor DarkYellow
}

# ============================================================
#  PLACEHOLDER PUBLIC ASSETS REMINDER
# ============================================================
Write-Host ""
Write-Host "[8/8] Public asset placeholders check..." -ForegroundColor Cyan

$publicAssets = @(
    "public\favicon.ico",
    "public\favicon-16x16.png",
    "public\favicon-32x32.png",
    "public\apple-touch-icon.png",
    "public\og-default.jpg",
    "public\manifest.json"
)

$missingAssets = @()
foreach ($asset in $publicAssets) {
    $full = Join-Path $DestRoot $asset
    if (-not (Test-Path $full)) {
        $missingAssets += $asset
    }
}

if ($missingAssets.Count -gt 0) {
    Write-Host ""
    Write-Host "  ⚠ These public assets need to be added manually:" -ForegroundColor Yellow
    foreach ($a in $missingAssets) {
        Write-Host "    → $a" -ForegroundColor DarkYellow
    }
}

# ============================================================
#  SUMMARY
# ============================================================
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Deployment complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor White
Write-Host ""
Write-Host "  1. Copy your .env.example to .env.local and fill in values:" -ForegroundColor Gray
Write-Host "       cp .env.example .env.local" -ForegroundColor DarkCyan
Write-Host ""
Write-Host "  2. Install dependencies:" -ForegroundColor Gray
Write-Host "       cd $DestRoot" -ForegroundColor DarkCyan
Write-Host "       npm install" -ForegroundColor DarkCyan
Write-Host ""
Write-Host "  3. Run local dev server:" -ForegroundColor Gray
Write-Host "       npm run dev" -ForegroundColor DarkCyan
Write-Host ""
Write-Host "  4. Add required public assets to: $publicDir" -ForegroundColor Gray
Write-Host "       favicon.ico, og-default.jpg, manifest.json, apple-touch-icon.png" -ForegroundColor DarkGray
Write-Host ""
Write-Host "  5. Deploy to Vercel:" -ForegroundColor Gray
Write-Host "       npx vercel --prod" -ForegroundColor DarkCyan
Write-Host "       (add RESEND_API_KEY + CONTACT_EMAIL in Vercel dashboard)" -ForegroundColor DarkGray
Write-Host ""
Write-Host "  Done. MEDVOXA website is ready for development." -ForegroundColor Green
Write-Host ""
