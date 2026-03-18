---
layout: home
permalink: /
title: "Home"
author_profile: true
header:
  overlay_color: "#1a1a2e"
  overlay_filter: "0.6"
  actions:
    - label: "View Projects"
      url: "/projects/"
    - label: "Download CV"
      url: "/assets/docs/Eric_Chow_CV.pdf"
excerpt: >-
  Robotics engineer building full-stack autonomous systems — from custom PCBs
  and embedded firmware to ROS2 control software and LLM-driven intelligence.
---

## What I Do

I design and build **complete robotic systems** — not just one layer, but the full stack:

- **Mechanical** — end effectors, compliance mechanisms, DFMA
- **Electronics** — custom PCBs, sensor fusion, motor control
- **Embedded** — Teensy, ESP32, serial protocols, real-time control
- **Software** — ROS2, PySide6/Qt, Python, C++
- **Intelligence** — LLM-first architectures, adaptive systems

Currently at **C3 Construction Robotics** in Hong Kong, where I'm the sole engineer on an autonomous suspended painting robot — taking it from concept through to field deployment on active industrial sites.

## Featured Projects

<div class="feature__wrapper">
{% for project in site.projects reversed %}
  {% if project.featured %}
  <div class="feature__item">
    <div class="archive__item">
      {% if project.header.teaser %}
        <div class="archive__item-teaser">
          <img src="{{ project.header.teaser }}" alt="{{ project.title }}">
        </div>
      {% endif %}
      <div class="archive__item-body">
        <h2 class="archive__item-title">
          <a href="{{ project.url }}">{{ project.title }}</a>
        </h2>
        <div class="archive__item-excerpt">
          {{ project.excerpt | markdownify }}
        </div>
      </div>
    </div>
  </div>
  {% endif %}
{% endfor %}
</div>
