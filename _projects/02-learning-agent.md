---
title: "LLM-First Spaced Repetition Agent"
excerpt: >-
  A Discord-based adaptive learning coach where all intelligence lives in the
  LLM prompt — not in code. Features spaced repetition, knowledge graphs,
  and self-repairing output pipelines.
order: 2
featured: true
header:
  teaser: /assets/images/projects/learning-agent-teaser.png
  overlay_image: /assets/images/projects/learning-agent-hero.png
  overlay_filter: 0.5
toc: true
---

## Overview

A personal learning system that combines **spaced repetition** with **LLM-driven adaptive coaching**. Unlike traditional flashcard apps where the algorithm is hardcoded, here the LLM *is* the algorithm — it decides what to teach, when to quiz, how to assess answers, and how to schedule reviews.

The core architecture is: **User → LLM → JSON action → Database executor**. The codebase is intentionally thin — all learning logic, pedagogical decisions, and adaptation happens in the prompt.

[View on GitHub →](https://github.com/hychowah/learning-agent)

## Architecture

### LLM-First Design

This project embodies a design philosophy I call **LLM-First**: when adding a new feature, the default answer is "teach the LLM," not "write new code."

The decision hierarchy:

1. Can the LLM handle it with better instructions? → Update the prompt
2. Does the LLM need memory? → Use existing data fields (remarks, descriptions)
3. Does the LLM need a new action? → Add a thin executor function (just DB glue)
4. Only if none of the above work → Add schema/code

This means the system adapts to new learning strategies by editing a markdown file — no code changes, no migrations, no deployments.

### System Components

| Component | Role |
|-----------|------|
| **AGENTS.md** | 600+ line system prompt — the brain of the system |
| **Discord Bot** | Primary user interface via discord.py |
| **FastAPI Server** | REST API for web UI and programmatic access |
| **SQLite Database** | Topics, concepts, scores, relationships |
| **Web UI** | D3.js knowledge graph + topic tree visualization |

### Adaptive Scoring

Custom spaced repetition algorithm replacing SM-2, designed for LLM assessment:

- **Score range:** 0.0 – 10.0 with asymmetric deltas (bad answers penalize more than good answers reward)
- **Score-based scheduling:** Higher scores → longer review intervals (exponential mapping)
- **LLM assessment:** The model evaluates answer quality considering partial knowledge, misconceptions, and understanding depth — not just right/wrong

### Self-Repairing Pipeline

LLM output isn't always valid JSON. The system includes:

- A **repair sub-agent** that takes malformed output and fixes it
- **Deduplication sub-agent** that detects when a new concept overlaps with existing ones, presenting options to the user via Discord buttons
- **Proposal-based confirmation** for destructive actions (delete, merge)

## Web Interface

The web UI provides:

- **Topic Tree** — expandable/collapsible hierarchy of all learning topics with concept counts and health indicators
- **Knowledge Graph** — D3.js force-directed graph showing concept relationships and clusters
- **Concept Browser** — searchable list with scores, review dates, and drill-down

## Technologies

`Python` · `discord.py` · `FastAPI` · `SQLite` · `D3.js` · `LLM Prompt Engineering` · `Spaced Repetition` · `REST API`
