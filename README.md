# KetofolDoc | Anesthesia Board Preparation & Clinical Learning Ecosystem

**KetofolDoc** is a comprehensive, open-access, cross-platform anesthesia education suite designed for residents, fellows, and clinical board candidates. It pairs exhaustive textbook literature synthesis with active recall test banks and an automated Spaced Repetition (SM-2) retention engine.

---

## 🚀 Live Ecosystem Platforms

KetofolDoc is hosted live at [ketofoldoc.com](https://ketofoldoc.com) and is organized into four core specialized modules:

1. **Saudi Board QB (`/saudi/`)**: Subspecialty question banks structured to match the Saudi Anesthesia Board curriculum blueprint.
2. **1000 Anesthesia Questions (`/1000qs/`)**: Classic chapter review modules derived from clinical references with embedded figures and rationales.
3. **Comprehensive Anesthesia (`/comp/`)**: 11 in-depth chapters covering anesthesia equipment, physical principles, pharmacology, and critical care.
4. **Textbook Summaries (`/summaries/`)**: High-yield structured summaries of *Miller's Anesthesia* chapters featuring vector KaTeX math equations, clean typography, and interactive micro-testing.

---

## 🧠 Core Features

* **SM-2 Spaced Repetition Engine**: Dynamically calculates review intervals (Again, Hard, Good, Easy) based on your response quality to counter the clinical forgetting curve.
* **Unified Board Readiness Index**: Aggregates live analytics across all active question banks and literature completion to display an objective score of exam preparedness.
* **Universal Cloud Synchronization**: Real-time cross-device sync of question answers, flashcard queues, custom highlights, and spaced repetition memory states via **Firebase Firestore**.
* **Subject-Mapped Synergy**: Automatically matches summary chapters with relevant recall questions pulled from all active question banks.
* **Interactive Study Highlighter**: Multi-color text highlighting tool built for precision clinical text annotation.

---

## 📂 Repository Structure

```text
ketofoldoc-landing/
├── CNAME                    # Custom domain configuration (ketofoldoc.com)
├── index.html               # Main landing portal & unified analytics hub
├── logo.svg                 # Ecosystem branding icon
├── 1000qs/                  # 1000 Anesthesia Questions platform
├── saudi/                   # Saudi Board QB platform
├── comp/                    # Comprehensive Anesthesia QB platform
│   ├── index.html
│   └── output_hall_js/      # Chapter JS modules (chapter_01 to chapter_11)
├── summaries/               # Miller's Anesthesia textbook summaries platform
│   ├── index.html
│   ├── books/               # Chapter database index
│   └── decks/               # Recall question decks
├── images_hall/             # Clinical diagrams and figure assets for Comprehensive QB
└── js/
    └── highlighter.js       # Universal study highlighter engine
