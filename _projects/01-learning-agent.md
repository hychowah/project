---
title: "Concept Tracker — LLM-Based Learning System"
excerpt: >-
  A Discord-based adaptive learning coach where all intelligence lives in the
  LLM prompt — not in code. Features spaced repetition, knowledge graphs,
  and self-repairing output pipelines.
order: 1
featured: true
header:
  teaser: /assets/images/projects/concept_tracker_web_interface_1.png
  overlay_image: /assets/images/projects/concept_tracker_web_interface_1.png
  overlay_filter: 0.6
gallery:
  - url: /assets/images/projects/concept_tracker_discord_showcase.png
    image_path: /assets/images/projects/concept_tracker_discord_showcase.png
    alt: "Discord bot interaction"
    title: "Concept Tracker in Discord"
  - url: /assets/images/projects/concept_tracker_web_interface_1.png
    image_path: /assets/images/projects/concept_tracker_web_interface_1.png
    alt: "Web interface — knowledge graph"
    title: "Web UI — knowledge graph view"
  - url: /assets/images/projects/concept_tracker_web_interface_2.png
    image_path: /assets/images/projects/concept_tracker_web_interface_2.png
    alt: "Web interface — topic tree"
    title: "Web UI — topic tree view"
---

## Overview

*Personal project, Mar 2026*

I used Anki for a while but kept running into the same frustrations — rigid card formats, no way to handle partial answers, and the scheduling algorithm doesn't care *how* you got something wrong. I looked around for alternatives but nothing fit what I actually wanted, so I built my own.

The core idea: let the LLM handle all the teaching decisions. It decides what to teach, when to quiz, how to score, and when to bring things back. The architecture is just **User → LLM → JSON action → Database**. When I want to change how it teaches, I edit a markdown file. No code changes, no migrations.

[View on GitHub →](https://github.com/hychowah/learning-agent)

## How It Works

The system prompt (600+ lines) contains all the teaching logic. The code just executes whatever the LLM decides — create a concept, schedule a review, merge duplicates. Discord is the main interface; there's also a FastAPI-backed web UI with a D3.js knowledge graph.

Scoring uses a custom spaced repetition algorithm (replacing SM-2) with asymmetric deltas — getting something wrong hurts more than getting it right helps. The LLM assesses answer quality beyond right/wrong, catching partial understanding and misconceptions.

LLM output isn't always valid JSON, so there's a repair sub-agent that fixes malformed responses, and a deduplication agent that catches overlapping concepts before they pile up.

## Technologies

`Python` · `discord.py` · `FastAPI` · `SQLite` · `D3.js` · `LLM Prompt Engineering` · `Spaced Repetition` · `REST API`

## Gallery

{% include gallery caption="Discord bot and web interface screenshots." %}
