# DoorMathPro ⚙️
> **Professional Garage Door Spring Engineering & Field Calculation Suite**
> Designed for Commercial & Residential Overhead Door Technicians, Estimators, and Sales Professionals.

[![Status](https://img.shields.io/badge/Status-Production%20Ready-10b981.svg)]()
[![PWA](https://img.shields.io/badge/PWA-100%25%20Offline%20Capable-f59e0b.svg)]()
[![License](https://img.shields.io/badge/License-MIT-38bdf8.svg)]()

---

## 🚀 Core Features

### 1. 🔄 Truck Stock Spring Matcher (Conversion Engine)
- Solves the daily installer headache: *"What wire on my truck can replace this broken spring?"*
- Input old spring specs (Wire size, Inside Diameter, Active length, 1 or 2 springs).
- Instantly generates a live matrix of all available wire sizes (.192 through .375) across 1.75", 2.0", and 2-5/8" IDs.
- Calculates exact required cut lengths, rated cycle life, and balance tolerances (+/- 2% exact match, +/- 5% acceptable).
- Filter by ID and toggle **High-Cycle Only (25,000+ cycles)**.

### 2. ⚖️ Door-to-Spring Sizer (IPPT Calculator)
- Calculates exact counterbalance requirements from door width, height, scale dead weight, and drum model.
- Supports standard drums (OMI 400-8, 400-12, 5250, High Lift HL-54, and Vertical Lift VL-11).
- Outputs total wind turns, turns in quarter-turn counts for winding bars, and required IPPT.
- Provides 3 engineered spring packages:
  - **Standard 10,000 Cycle Residential Pair**
  - **High-Cycle 25,000 Cycle Heavy-Duty Pair**
  - **Commercial 50,000+ Cycle Long-Life Pair**

### 3. 🚪 Sectional Door Weight Estimator
- Estimate door dead weight before job-site scale verification based on:
  - Width x Height x Number of Sections.
  - Steel gauge (24 ga, 25 ga, commercial 20 ga).
  - Core type (Non-insulated Pan, Polystyrene Vinyl-back, Foamed-in-place Polyurethane R-16, Full-View Aluminum, Solid Wood).
  - Glass lites (single pane, insulated, full-width glass row).
  - Reinforcement struts (2-1/4" U-bars, heavy commercial trusses).
- One-click button to transfer calculated weight directly into the Spring Sizer.

### 4. 📏 Field Quick Tools & Reference
- **20-Coil Wire Size Identifier**: Measure 20 coils with a tape measure to immediately identify wire gauge and DASMA color code.
- **OD to ID Diameter Converter**: Convert outside caliper measurements to inside spring diameter.
- **Headroom Clearances Guide**: 12" radius, 15" radius, and Low-Headroom front/rear mount clearances.

### 5. 📄 Printable Job Spec Sheet / Work Order
- Floating "Spec Sheet" button generates a clean, printable summary for the job site or work order.
- Styled for clean `@media print` black-and-white output with technician verification checklist and sign-off lines.

---

## ⚡ Deployment in 2 Minutes (100% Free Hosting)

This application has **zero backend dependencies** and **zero build steps required**. It is pure, high-performance HTML5/CSS/JavaScript with a Progressive Web App (PWA) Service Worker.

### Option A: Deploy to GitHub Pages (Easiest)
1. Create a new repository on GitHub named `doormathpro`.
2. Push this folder to your repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: DoorMathPro"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/doormathpro.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings > Pages**.
4. Under **Branch**, select `main` and `/ (root)`, then click **Save**.
5. Your site is live in ~60 seconds at `https://YOUR_USERNAME.github.io/doormathpro/`.

### Option B: Deploy to Cloudflare Pages & Connect `DoorMathPro.com` (Recommended)
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select your `doormathpro` repository.
4. **Build Settings**:
   - Framework preset: `None`
   - Build command: *(leave empty)*
   - Build output directory: `.`
5. Click **Save and Deploy**.
6. Under the **Custom Domains** tab, enter `DoorMathPro.com`. Cloudflare will automatically provision SSL certificates and global CDN caching.

---

## 📱 Mobile PWA Installation (Add to Home Screen)

- **iPhone / iOS**: Open in Safari > Tap the **Share** button (box with arrow) > Tap **"Add to Home Screen"**.
- **Android**: Open in Chrome > Tap the three dots menu > Tap **"Install App"** or **"Add to Home screen"**.

Once installed, **DoorMathPro** functions completely offline in underground parkades, basements, and rural job sites with zero cell reception.

---

## 📐 Mathematical Standards
All formulas adhere strictly to:
- **ASTM A229** Oil-Tempered Spring Wire Standards ($E = 28,500,000\text{ psi}$).
- **DASMA 102** Specifications for Sectional Garage Door Springs.
