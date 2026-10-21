# MASTER IMPLEMENTATION PROMPT

## Static POS / Cashier App SaaS Landing Page

You are a senior frontend engineer, UI/UX designer, conversion-focused product designer, and web performance specialist.

Your task is to DESIGN AND IMPLEMENT a complete production-ready static marketing and sales website for a Point of Sale (POS) / cashier application.

Read this specification completely before writing code.

---

# 1. PRIMARY OBJECTIVE

Build a polished, modern, responsive static website that sells a cashier/POS application targeted at:

- UMKM
- retail stores
- minimarkets
- cafes
- restaurants
- bakeries
- barbershops
- laundry businesses
- service businesses
- other small-to-medium businesses

Primary conversion funnel:

Visitor
→ Understand Product
→ Explore Features
→ See Dashboard/Analytics
→ Compare Pricing
→ Select Package
→ Complete Order Form
→ Review Order
→ Select Manual Payment
→ Pay via Bank / E-Wallet / QRIS
→ Confirm Payment via Gmail/Email
→ Manual Service Activation

The website must feel like a real commercial SaaS/POS product.

It must NOT look like:

- a generic template;
- an admin dashboard website;
- an AI-generated landing page;
- a cryptocurrency website;
- a fintech website;
- a corporate banking website.

---

# 2. REFERENCE WEBSITE

Primary visual reference:

https://kasirpro.com/

Use the reference ONLY for:

- overall SaaS/POS visual direction;
- section rhythm;
- product-first presentation;
- hero composition ideas;
- navigation hierarchy;
- feature presentation;
- pricing presentation;
- long-form landing page flow;
- whitespace balance;
- conversion-oriented CTA placement.

DO NOT clone or reproduce:

- KasirPro logo;
- KasirPro brand name;
- copyrighted illustrations;
- screenshots;
- icons;
- wording/copy;
- exact layouts;
- exact colors;
- pricing;
- testimonials;
- images;
- visual assets;
- proprietary product UI.

The final website must have an ORIGINAL visual identity.

The goal is:

"Similar level of professionalism and information hierarchy, but clearly a different product and design."

---

# 3. HARD TECHNICAL CONSTRAINTS

This project MUST be a static website.

DO NOT implement:

- CMS
- admin panel
- user authentication
- login
- register
- customer dashboard
- database
- server-side database
- payment gateway
- automatic payment verification
- subscription billing system
- server-side checkout
- card payment processing
- user account management

Do NOT create fake backend functionality.

Everything possible must operate client-side.

---

# 4. RECOMMENDED STACK

Preferred implementation:

- Next.js
- TypeScript
- Tailwind CSS
- Recharts
- Lucide Icons

Configure Next.js for STATIC EXPORT.

Example requirement:

```js
output: "export";
```

The final build must be deployable as static files.

Do not require a Node.js server in production.

If the existing project already uses another frontend stack, preserve that stack unless changing it is absolutely necessary.

---

# 5. DESIGN DIRECTION

Design style:

Modern SaaS +
POS Software +
Business Management +
Clean Indonesian commercial website

Visual keywords:

- professional
- approachable
- modern
- trustworthy
- lightweight
- business-oriented
- conversion-focused
- clean
- spacious
- polished

Avoid excessive visual effects.

DO NOT overuse:

- gradients
- glassmorphism
- glowing effects
- neon
- excessive animations
- huge text
- floating blobs
- decorative 3D elements
- unnecessary abstract illustrations

The product UI should be the visual hero.

---

# 6. DESIGN SYSTEM

Create reusable design tokens.

Use CSS variables or Tailwind theme variables.

Example:

```css
--primary
--primary-hover
--primary-light

--secondary

--background
--surface
--surface-muted

--text-primary
--text-secondary
--text-muted

--border
--success
--warning
--danger
```

Do not scatter random hex values throughout components.

---

# 7. COLOR SYSTEM

Use an original brand color.

Recommended direction:

Primary:
deep professional blue / blue-indigo

Supporting:
clean cyan or subtle green

Background:
white / very light neutral

Text:
dark slate

Success:
green

Warning:
amber

Do not copy the exact KasirPro color palette.

Maintain WCAG-friendly contrast.

---

# 8. TYPOGRAPHY

Use a modern sans-serif font suitable for SaaS.

Recommended:

Inter

or

Plus Jakarta Sans

or

Manrope

Typography hierarchy:

H1:
bold / strong
approximately 48–64px desktop

H2:
36–48px

H3:
22–28px

Body:
16–18px

Small:
14px

Mobile typography must scale appropriately.

Avoid oversized headings that consume the entire viewport.

---

# 9. GLOBAL LAYOUT

Maximum content width:

```text
1200–1280px
```

General horizontal padding:

Desktop:
24–32px

Tablet:
20–24px

Mobile:
16–20px

Section vertical spacing:

Desktop:
96–128px

Mobile:
64–80px

Maintain consistent vertical rhythm.

---

# 10. BORDER RADIUS

Use consistent radius.

Suggested:

Small controls:
8px

Buttons:
10–12px

Cards:
16px

Large product showcase:
20–24px

Do not make every UI element extremely rounded.

---

# 11. SHADOWS

Use subtle SaaS shadows.

Cards should mostly use:

- border;
- subtle shadow;
- white/light surface.

Avoid large dramatic shadows.

Product screenshots/mockups can use slightly stronger shadows to create depth.

---

# 12. HEADER

Create a sticky responsive header.

Desktop layout:

Logo
|
Home
Fitur
Demo
Harga
FAQ
Kontak
|
Primary CTA

Primary CTA:

"Pilih Paket"

Header behavior:

- sticky top;
- white/translucent surface;
- subtle bottom border;
- compact height;
- remains readable while scrolling.

Do NOT include:

Login
Register
Dashboard

because this website does not have authentication.

---

# 13. MOBILE HEADER

On mobile:

Logo left

Hamburger right

CTA may remain visible only if sufficient space exists.

Opening hamburger displays:

Home
Fitur
Demo
Harga
FAQ
Kontak
Pilih Paket

Requirements:

- keyboard accessible;
- close on navigation;
- close with Escape;
- correct aria attributes;
- no horizontal overflow.

---

# 14. HERO SECTION

The hero is the most important visual section.

Desktop layout:

approximately:

```text
LEFT 45–50%
RIGHT 50–55%
```

LEFT:

Small eyebrow/badge

Example:

"Solusi Kasir Modern untuk Bisnis Indonesia"

H1:

"Kelola Penjualan dan Bisnis Lebih Mudah"

Supporting copy:

Explain that the POS application helps businesses manage transactions, products, stock, and sales reports from one system.

CTA group:

Primary:

"Pilih Paket"

Secondary:

"Lihat Fitur"

Below CTA:

small trust statement.

Example:

"Untuk retail, cafe, restoran, minimarket dan UMKM."

RIGHT:

Large ORIGINAL POS dashboard mockup.

Do not use a generic illustration as the primary hero visual.

Create a realistic application interface.

---

# 15. HERO PRODUCT MOCKUP

Dashboard mockup should contain:

Sidebar:

- Dashboard
- Transaksi
- Produk
- Stok
- Pelanggan
- Laporan

Top bar:

Business name
Notification icon
User placeholder

Summary cards:

Total Penjualan

Rp 32.450.000

Transaksi

1.284

Produk Terjual

3.842

Rata-rata Transaksi

Rp 126.000

Main chart:

Sales Overview

Secondary widget:

Top Products

Create the UI yourself.

Do not reproduce the reference website's screenshots.

---

# 16. HERO DECORATION

Use minimal decoration.

Allowed:

- subtle background grid;
- soft radial background;
- tiny geometric accent;
- small floating statistics card.

Do NOT let decorative elements compete with the dashboard.

---

# 17. TRUST / BUSINESS CATEGORY SECTION

After hero, create:

"Dirancang untuk berbagai jenis bisnis"

Display category cards or compact icon items:

Retail

Minimarket

Cafe

Restoran

Bakery

Fashion

Barbershop

Laundry

Toko Elektronik

Toko Kelontong

Usaha Jasa

UMKM

Use Lucide icons where appropriate.

Avoid external copyrighted logos.

---

# 18. PROBLEM SECTION

Create a section explaining common business problems.

Headline:

"Masih Mengelola Bisnis Secara Manual?"

Problem cards:

Transaksi sulit dilacak

Stok sering tidak akurat

Laporan membutuhkan waktu

Sulit mengetahui produk terlaris

Data penjualan tersebar

Sulit memantau performa bisnis

Use restrained warning/red accents.

---

# 19. SOLUTION TRANSITION

Immediately connect problems with the product.

Headline example:

"Satu Sistem untuk Operasional Bisnis yang Lebih Rapi"

Explain:

Transactions
Products
Inventory
Customers
Expenses
Reports
Analytics

are managed from one application.

Use an ORIGINAL product interface visual.

---

# 20. MAIN FEATURES

Create a feature grid.

Required features:

Point of Sale

Product Management

Stock Management

Sales Report

Expense Tracking

Customer Management

Discount Management

Digital Receipt

Multiple Payment Methods

Business Analytics

Desktop:

3 columns preferred.

Tablet:

2 columns.

Mobile:

1 column.

Each card:

Icon
Feature name
Short description

Cards must have consistent heights.

---

# 21. FEATURE HIGHLIGHT SECTIONS

Do not rely only on small feature cards.

Create alternating large sections.

Example:

Section A:

Text left
Product mockup right

"Transaksi Lebih Cepat"

Section B:

Product mockup left
Text right

"Pantau Stok Lebih Mudah"

Section C:

Text left
Analytics mockup right

"Pahami Performa Bisnis"

Alternate layouts to create visual rhythm.

---

# 22. PRODUCT DASHBOARD SHOWCASE

Create a large dashboard preview section.

Headline:

"Semua Informasi Bisnis dalam Satu Dashboard"

Dashboard contains:

Summary Cards

Revenue chart

Recent transactions

Top products

Payment distribution

Stock alerts

Use realistic Indonesian currency formatting.

Example:

Rp 24.850.000

not:

$24,850

---

# 23. ANALYTICS SECTION

Create a dedicated analytics section.

This section MUST contain actual client-side charts.

Use:

Recharts

if using React/Next.js.

Required charts:

### Sales Overview

Line or area chart.

Demo data:

Jan: 12,000,000
Feb: 17,000,000
Mar: 15,000,000
Apr: 23,000,000
May: 28,000,000
Jun: 32,000,000

Provide client-side filter:

7 Hari

30 Hari

6 Bulan

The filters should actually update the chart dataset.

---

# 24. PAYMENT DISTRIBUTION CHART

Create donut/pie chart:

Cash:
35%

QRIS:
30%

Bank Transfer:
20%

E-Wallet:
15%

Display percentages and accessible textual representation.

---

# 25. TOP PRODUCTS CHART

Create horizontal bar chart.

Use generic fictional products.

Example:

Kopi Susu

Americano

Croissant

Matcha Latte

Chocolate Cake

Do not use trademarked product names.

---

# 26. CHART REQUIREMENTS

Charts must:

- resize responsively;
- not overflow mobile;
- have tooltips;
- use Indonesian currency formatting;
- have readable legends;
- have accessible textual summary;
- use static demo data;
- never claim to display real visitor/business data.

Label appropriately:

"Contoh Data Dashboard"

where necessary.

---

# 27. HOW IT WORKS

Create a 4-step section.

Step 01

Pilih Paket

Step 02

Lakukan Pembayaran

Step 03

Konfirmasi Pembayaran

Step 04

Mulai Gunakan Aplikasi

Desktop:

horizontal stepper.

Mobile:

vertical stepper.

Connect steps visually.

---

# 28. BENEFITS SECTION

Focus on business outcomes rather than features.

Example:

"Lebih Cepat"

Reduce repetitive transaction work.

"Lebih Rapi"

Keep business records organized.

"Lebih Terukur"

Understand sales performance.

"Lebih Mudah Dipantau"

See important business information quickly.

Avoid unsupported numeric claims.

---

# 29. PRICING

Create three pricing cards.

Plans:

BASIC

PRO

BUSINESS

Do NOT use prices from the reference website.

Use placeholder/configuration values.

Example data model:

```ts
{
  id: "basic",
  name: "Basic",
  monthlyPrice: 49000,
  description: "...",
  features: [...]
}
```

All pricing content must come from one data/configuration source.

---

# 30. PRICING VISUAL HIERARCHY

PRO should be visually emphasized.

Add badge:

"Paling Populer"

Basic and Business remain visually secondary.

Each pricing card contains:

Plan
Description
Price
Billing unit
Features
CTA

CTA:

"Pilih Basic"

"Pilih Pro"

"Pilih Business"

Clicking CTA routes to:

```text
/order?plan=basic
/order?plan=pro
/order?plan=business
```

---

# 31. BILLING DURATION

Order form supports:

1 Bulan

3 Bulan

6 Bulan

12 Bulan

Calculate price client-side.

If discounts exist, define them centrally.

Example:

```ts
durations = {
  1: 0,
  3: 0.05,
  6: 0.1,
  12: 0.2,
};
```

These values are placeholders and must be easy to edit.

---

# 32. ORDER PAGE

Route:

```text
/order
```

Read selected plan from URL:

```text
?plan=pro
```

Page layout desktop:

LEFT:
Order form

RIGHT:
Sticky Order Summary

Mobile:

Form
then
Order Summary

---

# 33. ORDER FORM

Fields:

Nama Lengkap

Nama Bisnis

Nomor WhatsApp

Email

Jenis Usaha

Paket

Durasi Berlangganan

Requirements:

- proper labels;
- required indicators;
- validation;
- inline error messages;
- correct input types;
- no unnecessary fields;
- accessible forms.

Do not ask for payment credentials.

---

# 34. ORDER SUMMARY

Display:

Paket

Durasi

Harga

Discount

Subtotal

TOTAL

Use Indonesian currency formatting:

```text
Rp 149.000
```

Never:

```text
Rp149000
```

Primary button:

"Lanjut ke Pembayaran"

---

# 35. ORDER DATA HANDLING

Because this is static:

DO NOT pretend the order is saved to a server.

Store temporary order state using:

sessionStorage

or

localStorage

Prefer:

sessionStorage

for temporary checkout information.

Never store sensitive payment credentials.

---

# 36. ORDER ID

Generate client-side reference ID.

Format:

```text
ORD-YYYYMMDD-XXXX
```

Example:

```text
ORD-20261021-K7M2
```

Use:

date +
cryptographically suitable random values where browser APIs allow.

Clearly treat this as a:

"Nomor Referensi Pesanan"

Do NOT imply that it is a guaranteed server-side transaction ID.

---

# 37. PAYMENT PAGE

Route:

```text
/payment
```

Layout:

Order summary

Payment method selector

Payment instructions

Security notice

Confirmation CTA

---

# 38. PAYMENT METHODS

Supported methods:

Bank Transfer

E-Wallet

QRIS

Do NOT implement payment gateway.

Do NOT implement automatic verification.

---

# 39. BANK TRANSFER UI

Create selectable payment cards.

Example configuration:

```ts
{
  bankName: "BANK_NAME",
  accountNumber: "0000000000",
  accountHolder: "ACCOUNT_HOLDER"
}
```

Display:

Bank

Account Number

Account Holder

Total Payment

Button:

"Salin Nomor Rekening"

After copying:

show non-intrusive feedback:

"Nomor rekening disalin"

---

# 40. E-WALLET

Configuration supports:

DANA

GoPay

OVO

ShopeePay

Do not hardcode provider data across multiple components.

Centralize it.

Display:

Provider

Number

Account Holder

Total

Copy button.

---

# 41. QRIS

Display static merchant QRIS image from:

```text
/public/payment/qris.png
```

Do not fabricate an actual working QRIS.

Use placeholder until merchant provides official QRIS.

Display warning for developer:

"Replace placeholder with official merchant QRIS before production."

User-facing instructions:

1. Buka aplikasi bank atau e-wallet.
2. Pilih menu Scan QRIS.
3. Scan kode QR.
4. Masukkan nominal sesuai total pesanan.
5. Selesaikan pembayaran.
6. Simpan bukti pembayaran.

---

# 42. PAYMENT SECURITY NOTICE

Display visible notice:

"Kami tidak pernah meminta PIN, password, OTP, CVV, atau informasi rahasia rekening Anda."

Never request:

PIN

OTP

CVV

bank password

e-wallet PIN

full card number

---

# 43. PAYMENT CONFIRMATION

IMPORTANT:

The final PRD uses Gmail/Email confirmation.

DO NOT use WhatsApp as the primary payment confirmation flow.

Primary CTA:

"Konfirmasi via Email"

Generate email using:

mailto:

Recipient must be defined in central configuration.

Example placeholder:

```ts
supportEmail: "support@example.com";
```

Do not invent a real business email.

---

# 44. EMAIL TEMPLATE

Pre-fill email subject:

```text
Konfirmasi Pembayaran - [ORDER_ID]
```

Pre-fill body:

```text
Halo,

Saya ingin melakukan konfirmasi pembayaran.

Nomor Referensi:
Nama:
Nama Bisnis:
Email:
Nomor WhatsApp:
Paket:
Durasi:
Total Pembayaran:
Metode Pembayaran:

Saya akan melampirkan bukti pembayaran pada email ini.

Terima kasih.
```

Important:

A `mailto:` link cannot automatically attach the proof of payment.

Tell the customer:

"Setelah aplikasi email terbuka, lampirkan bukti pembayaran sebelum mengirim email."

---

# 45. OPTIONAL SUPPORT CONTACT

WhatsApp may still exist as general customer support.

It must NOT replace the primary Gmail/email payment confirmation flow.

Floating support button may use:

"Hubungi Support"

instead of:

"Konfirmasi Pembayaran"

---

# 46. PAYMENT SUCCESS PAGE

Route:

```text
/payment-success
```

Do not claim payment has been verified.

Correct language:

"Instruksi Konfirmasi Pembayaran"

or

"Langkah Selanjutnya"

NOT:

"Pembayaran Berhasil"

unless actual verification exists.

Explain:

Payment verification is performed manually.

Show:

Order reference
Selected plan
Total
Confirmation instructions

CTA:

"Konfirmasi via Email"

---

# 47. PAYMENT METHOD SECTION ON HOMEPAGE

Create a small trust section before/near pricing or final CTA.

Headline:

"Pembayaran Mudah"

Show generic methods:

Transfer Bank

E-Wallet

QRIS

Avoid using bank/provider brand logos unless proper assets/permissions are supplied.

Text/icon labels are sufficient.

---

# 48. TESTIMONIALS

Create testimonial component architecture.

However:

Do NOT fabricate customer testimonials and present them as real.

If real testimonials are unavailable:

Use clearly marked placeholders in development.

Example:

```text
[TESTIMONIAL PELANGGAN]
```

or hide section in production until real data is provided.

---

# 49. TRUST METRICS

Same principle.

Do NOT invent:

10.000+ customers

99.99% uptime

1M transactions

4.9 rating

unless real verified values are supplied.

Use configuration placeholders.

---

# 50. FAQ

Create accessible accordion.

Questions:

Apa itu aplikasi kasir ini?

Bisnis apa saja yang cocok menggunakan aplikasi?

Apakah aplikasi dapat digunakan di HP?

Apakah aplikasi membutuhkan internet?

Apakah mendukung printer thermal?

Bagaimana sistem pembayaran paket?

Apakah pembayaran otomatis diverifikasi?

Bagaimana cara konfirmasi pembayaran?

Berapa lama proses aktivasi?

Apakah paket dapat di-upgrade?

Important:

Answer manual payment questions accurately.

Do not claim automatic verification.

---

# 51. FINAL CTA

Create a visually distinct CTA section.

Headline:

"Siap Membuat Operasional Bisnis Lebih Mudah?"

Supporting text.

Primary:

"Pilih Paket Sekarang"

Secondary:

"Hubungi Kami"

Keep it clean.

Avoid oversized gradient blocks.

---

# 52. FOOTER

Desktop:

4-column structure.

Column 1:

Logo
Short product description

Column 2:

Produk

Fitur
Harga
Demo

Column 3:

Bantuan

FAQ
Kontak
Email

Column 4:

Legal

Privacy Policy
Terms & Conditions

Bottom:

Copyright © [CURRENT_YEAR] [BRAND_NAME]

Do not hardcode outdated year if avoidable.

---

# 53. REQUIRED ROUTES

Implement:

```text
/
/features
/pricing
/order
/payment
/payment-success
/privacy-policy
/terms
```

Do NOT implement:

```text
/login
/register
/admin
/dashboard
```

---

# 54. HOMEPAGE ORDER

Follow this hierarchy:

```text
HEADER

HERO
↓
BUSINESS CATEGORIES
↓
PROBLEM
↓
SOLUTION
↓
MAIN FEATURES
↓
FEATURE HIGHLIGHT #1
↓
FEATURE HIGHLIGHT #2
↓
DASHBOARD SHOWCASE
↓
ANALYTICS / CHART
↓
HOW IT WORKS
↓
BENEFITS
↓
PRICING
↓
PAYMENT METHODS
↓
TESTIMONIALS
↓
FAQ
↓
FINAL CTA
↓
FOOTER
```

Do not randomly rearrange this hierarchy without a strong UX reason.

---

# 55. COMPONENT ARCHITECTURE

Suggested:

```text
components/
├── layout/
│   ├── Header.tsx
│   ├── MobileMenu.tsx
│   ├── Footer.tsx
│   └── Container.tsx
│
├── home/
│   ├── Hero.tsx
│   ├── BusinessTypes.tsx
│   ├── Problems.tsx
│   ├── Solution.tsx
│   ├── Features.tsx
│   ├── FeatureShowcase.tsx
│   ├── DashboardPreview.tsx
│   ├── Analytics.tsx
│   ├── HowItWorks.tsx
│   ├── Benefits.tsx
│   ├── Pricing.tsx
│   ├── PaymentMethods.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   └── FinalCTA.tsx
│
├── charts/
│   ├── SalesChart.tsx
│   ├── PaymentChart.tsx
│   └── ProductChart.tsx
│
├── pricing/
│   ├── PricingCard.tsx
│   └── PricingComparison.tsx
│
├── order/
│   ├── OrderForm.tsx
│   └── OrderSummary.tsx
│
├── payment/
│   ├── PaymentSelector.tsx
│   ├── BankPayment.tsx
│   ├── EwalletPayment.tsx
│   ├── QRISPayment.tsx
│   └── PaymentSecurity.tsx
│
└── ui/
    ├── Button.tsx
    ├── Badge.tsx
    ├── Card.tsx
    ├── Accordion.tsx
    ├── Input.tsx
    ├── Select.tsx
    └── SectionHeading.tsx
```

Avoid creating hundreds of tiny unnecessary components.

---

# 56. DATA ARCHITECTURE

Create:

```text
data/
├── site.ts
├── features.ts
├── business-types.ts
├── pricing.ts
├── payments.ts
├── faq.ts
├── testimonials.ts
└── analytics.ts
```

All frequently edited business information must live in data/configuration files.

---

# 57. SITE CONFIG

Example:

```ts
export const siteConfig = {
  name: "BRAND_NAME",
  description: "BRAND_DESCRIPTION",
  url: "https://example.com",

  contact: {
    email: "support@example.com",
    whatsapp: "62XXXXXXXXXXX",
  },
};
```

Use obvious placeholders where real business information has not been supplied.

Never silently invent company information.

---

# 58. PAYMENT CONFIG

Create one source of truth.

Example:

```ts
export const paymentConfig = {
  banks: [],
  ewallets: [],
  qris: {
    merchantName: "",
    image: "/payment/qris.png",
  },
};
```

Components consume this data.

Never duplicate account numbers in multiple files.

---

# 59. RESPONSIVE BEHAVIOR

Required breakpoints:

Mobile:

320–767px

Tablet:

768–1023px

Desktop:

1024–1439px

Large desktop:

1440px+

Mobile must NOT feel like a squeezed desktop site.

Specifically test:

320px
375px
390px
430px
768px
1024px
1280px
1440px

---

# 60. MOBILE UX

Mobile requirements:

- no horizontal scrolling;
- large tap targets;
- charts fit container;
- pricing cards stack;
- hero visual moves below copy;
- form fields use full width;
- order summary does not cover content;
- payment cards stack;
- QR code remains readable;
- FAQ controls are touch-friendly;
- navigation menu is accessible.

---

# 61. INTERACTION DESIGN

Use subtle interaction.

Buttons:

150–200ms transition.

Cards:

small border/shadow change.

Navbar:

smooth state change.

FAQ:

accessible expand/collapse.

Charts:

tooltips.

Copy buttons:

feedback state.

Avoid excessive scroll animations.

---

# 62. ANIMATION

If animation library is not already installed, do not add a heavy dependency solely for decorative animation.

Prefer CSS.

If motion is used:

- subtle fade;
- slight translate;
- no dramatic parallax;
- no endless floating animation.

Respect:

```css
prefers-reduced-motion
```

---

# 63. ACCESSIBILITY

Target WCAG AA where practical.

Required:

semantic HTML

one logical H1

correct heading hierarchy

keyboard navigation

visible focus indicators

form labels

alt text

aria-expanded on accordion

aria-controls where needed

adequate contrast

descriptive buttons

Do not use clickable `<div>` elements when `<button>` or `<a>` is appropriate.

---

# 64. SEO

Every route needs:

unique title

meta description

canonical URL

Open Graph metadata

social sharing metadata

favicon

meaningful headings

descriptive image alt text

Create structured data where accurate:

Organization

SoftwareApplication

FAQPage

Do not include fake ratings/reviews in schema.

---

# 65. PERFORMANCE

Target Lighthouse:

Performance >= 90

Accessibility >= 90

Best Practices >= 90

SEO >= 90

Optimize:

images

fonts

JavaScript

chart loading

bundle size

layout shifts

Use lazy loading for below-the-fold media.

Use WebP/AVIF where practical.

---

# 66. IMAGE RULES

Product mockups should be:

- original;
- created from project UI;
- optimized;
- responsive.

Do not hotlink assets from the reference website.

Do not copy external product screenshots.

Use placeholders for unavailable business imagery.

---

# 67. ICON RULES

Prefer Lucide.

Keep icon stroke style consistent.

Do not mix random icon packs.

Do not use emojis as primary UI icons.

---

# 68. CONTENT STYLE

Website copy must be in Bahasa Indonesia.

Tone:

professional
clear
friendly
concise
business-focused

Avoid exaggerated marketing language.

Avoid claims such as:

"Terbaik di Indonesia"

"No. 1"

"100% meningkatkan omzet"

unless evidence is supplied.

---

# 69. ERROR HANDLING

Order form:

show field-level errors.

Missing plan:

default safely or ask user to select plan.

Invalid URL plan:

do not crash.

Missing session order:

redirect safely to order/pricing page.

Missing QRIS asset:

show clear placeholder state.

Clipboard failure:

provide manual-copy fallback.

Email client unavailable:

display support email so customer can copy it manually.

---

# 70. EMPTY / PLACEHOLDER STATES

Use intentional placeholders for missing business information.

Examples:

```text
[BRAND_NAME]

[SUPPORT_EMAIL]

[WHATSAPP_NUMBER]

[BANK_ACCOUNT]

[ACCOUNT_HOLDER]

[QRIS_IMAGE]

[REAL_TESTIMONIAL]
```

Make placeholders easy to search globally.

---

# 71. ANALYTICS EVENTS

Prepare event helper architecture for:

```text
hero_cta_click
feature_view
pricing_view
plan_select
checkout_start
payment_method_select
copy_bank_account
qris_view
email_confirmation_click
support_click
```

Do not automatically install third-party analytics unless requested.

Provide hooks/helper functions ready for later integration.

---

# 72. PRIVACY

Because the website is static:

Minimize data collection.

Do not send order data to hidden external services.

Do not silently transmit personal information.

Order information should remain client-side until the customer intentionally opens their email application for confirmation.

---

# 73. SECURITY

Production requirements:

HTTPS

CSP-compatible implementation

Referrer Policy

Permissions Policy

X-Content-Type-Options

Safe external links

Dependency security

Do not expose secrets in frontend environment variables.

Remember:

Anything shipped to browser is public.

Never place private API keys in frontend code.

---

# 74. LEGAL PAGES

Create clean readable templates for:

Privacy Policy

Terms & Conditions

Use placeholders where actual legal/business information is required.

Do NOT fabricate legal company details.

---

# 75. VISUAL QUALITY CHECK

Before considering implementation complete, review the page visually.

Ask:

Does hero immediately communicate POS software?

Does it look professional at 1440px?

Does it still look intentional at 375px?

Are sections visually distinct?

Is spacing consistent?

Is pricing easy to compare?

Is the PRO plan visually emphasized without being excessive?

Are product mockups believable?

Are charts readable?

Does checkout feel trustworthy?

Is manual payment clearly explained?

Does the site avoid looking copied from the reference?

If any answer is no, improve it.

---

# 76. FUNCTIONAL QUALITY CHECK

Verify:

Navigation works.

Mobile menu works.

Anchor links work.

Pricing CTA carries correct plan.

Order validation works.

Duration changes total.

Discount calculation works.

Order reference generates correctly.

Order state persists between order and payment pages.

Payment selector works.

Bank copy button works.

E-wallet copy works.

QRIS renders.

Email confirmation contains correct order information.

FAQ works.

No login exists.

No backend dependency exists.

Static export succeeds.

---

# 77. CRITICAL PAYMENT RULE

Never display:

"Pembayaran berhasil"

simply because the user clicked a button.

There is no payment verification backend.

Use:

"Konfirmasi Pembayaran"

"Menunggu Konfirmasi"

"Langkah Selanjutnya"

"Pembayaran akan diverifikasi secara manual"

This distinction is mandatory.

---

# 78. REFERENCE IMPLEMENTATION RULE

The reference website is inspiration, NOT a cloning target.

The implementation should preserve these high-level qualities:

- clear hero;
- product visual dominance;
- straightforward navigation;
- business-oriented content;
- feature-rich long landing page;
- visible pricing;
- strong CTA;
- FAQ near the end;
- simple footer.

But improve the experience with:

- stronger dashboard visualization;
- modern responsive grid;
- dedicated analytics showcase;
- cleaner pricing;
- clearer purchase funnel;
- more professional payment flow;
- stronger mobile UX;
- accessibility;
- modern performance standards.

---

# 79. DO NOT DO

Do not:

copy KasirPro HTML/CSS

copy its logo

copy screenshots

copy marketing copy verbatim

copy its proprietary UI

copy its exact colors

copy its exact pricing

implement login

implement registration

create admin dashboard

create CMS

create database

create fake API

create fake checkout backend

create payment gateway

pretend payment is verified

fabricate testimonials

fabricate business statistics

fabricate bank information

fabricate QRIS

fabricate company/legal information

use lorem ipsum in final visible sections

leave broken links

leave TODO components visible

leave TypeScript errors

leave console errors

---

# 80. DEVELOPMENT ORDER

Implement in this order:

1. Inspect existing repository.
2. Preserve working configuration where appropriate.
3. Establish design tokens.
4. Create shared layout.
5. Build header/footer.
6. Build homepage hero.
7. Build business categories.
8. Build problem/solution.
9. Build feature grid.
10. Build product mockups.
11. Build dashboard showcase.
12. Implement charts.
13. Build How It Works.
14. Build Benefits.
15. Build Pricing.
16. Build FAQ.
17. Build final CTA.
18. Build `/features`.
19. Build `/pricing`.
20. Build `/order`.
21. Implement client-side pricing logic.
22. Implement session order state.
23. Build `/payment`.
24. Implement Bank/E-Wallet/QRIS selection.
25. Implement email confirmation.
26. Build `/payment-success`.
27. Build legal pages.
28. Add metadata.
29. Optimize responsive behavior.
30. Accessibility audit.
31. Production build.
32. Fix all build/runtime issues.

Do not stop after implementing only the homepage.

---

# 81. EXPECTED FINAL RESULT

The final result must feel like a legitimate Indonesian POS SaaS website ready to be customized with real:

brand name

logo

pricing

bank account

e-wallet information

QRIS

support email

support WhatsApp

screenshots

testimonials

company information

The design should communicate:

"Professional POS software for modern businesses."

The visitor should be able to understand the product and reach payment confirmation without creating an account.

---

# 82. FINAL ACCEPTANCE CRITERIA

The implementation is accepted only when:

- website is fully responsive;
- all required routes exist;
- no login/register exists;
- no CMS exists;
- no database is required;
- no production server runtime is required;
- static export succeeds;
- charts work;
- chart filters work;
- pricing works;
- plan selection works;
- order form works;
- duration calculation works;
- manual payment works;
- bank copy works;
- e-wallet copy works;
- QRIS section works;
- email confirmation is correctly generated;
- manual verification is clearly communicated;
- mobile navigation works;
- FAQ works;
- accessibility basics are implemented;
- SEO metadata exists;
- no fake claims are presented;
- no copyrighted reference assets are copied;
- no console errors remain;
- no obvious visual overflow exists;
- Lighthouse targets are reasonably met.

---

# 83. FINAL INSTRUCTION TO CODING AGENT

Do not merely generate a wireframe.

Build the complete website.

Do not simplify important sections without reason.

Do not add features outside the requirements.

Do not introduce authentication, CMS, database, or payment gateway.

When information such as brand name, bank account, QRIS, email, or company identity has not been supplied, use clearly named configuration placeholders instead of inventing data.

Prioritize:

1. visual quality;
2. conversion clarity;
3. responsive behavior;
4. maintainable code;
5. performance;
6. accessibility;
7. payment clarity.

Use the reference website for visual direction and information hierarchy only.

The final website must remain visually original and technically independent.
