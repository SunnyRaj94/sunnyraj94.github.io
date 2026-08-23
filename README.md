# Sunny Raj — AI & Machine Learning Systems Engineer Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen?style=flat-square&logo=github)](https://sunnyraj94.github.io/)
[![Website](https://img.shields.io/badge/Portfolio-sunnyraj94.github.io-sky?style=flat-square)](https://sunnyraj94.github.io/)

This repository hosts the personal portfolio website of **Sunny Raj** (6+ YOE Senior Machine Learning & AI Systems Engineer), live at **[https://sunnyraj94.github.io/](https://sunnyraj94.github.io/)**.

---

## ⚡ Overview & Features

- **AI Systems Engineering Command Center**: Architected to highlight production multi-agent systems, enterprise RAG, and large-scale data platforms.
- **Prominent Impact Metrics Bar**: Highlighting 6+ YOE, 2M+ Daily API calls, 70% retrieval speedup, 50% ticket reductions, and 10+ GB daily PySpark data pipelines.
- **Engineering Case Studies with Flow Diagrams**: Structured breakdowns for **RagForge** and **Visual Fashion Detector**.
- **Interactive Copy-to-Clipboard Buttons**: Clickable contact badges for email (`mail.sunnyraj94@gmail.com`) and phone (`+91 8821057755`) with instant visual feedback.
- **Open Graph & Social Media Cards**: Configured social sharing previews for LinkedIn, Twitter, and messaging apps.

---

## 📂 Repository File Structure

```text
.
├── index.html                 # Single-page Command Center HTML structure
├── assets/
│   ├── css/
│   │   └── style.css          # Custom styling, smooth scroll & scrollbar styles
│   └── js/
│       ├── main.js            # Click-to-copy, smooth scrollspy & theme management
│       └── api.js             # Async REST/GraphQL API integration stubs
├── profile/
│   ├── profile-picture.jpg    # Avatar profile picture & favicon asset
│   └── Resume.pdf             # PDF resume file
└── README.md                  # Comprehensive documentation
```

---

## 🚀 Local Development & Preview

Run a quick local web server using Python:

```bash
# Start server from repository root
python3 -m http.server 8000
```

Open **`http://localhost:8000`** in your browser to test locally.

---

## 🛠️ Updating Content

### Updating Resume PDF
Replace `profile/Resume.pdf` with your new PDF file. The download buttons across the website are dynamically configured via `assets/js/main.js` and direct HTML links.

### Updating Profile Photo
Replace `profile/profile-picture.jpg` with your updated picture.

---

## 🌐 GitHub Pages Deployment

This repository deploys automatically via GitHub Pages:
- **Repository Name**: `sunnyraj94.github.io`
- **Branch**: `main`
- **Root Directory**: `/`
