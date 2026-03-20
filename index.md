---
layout: single
permalink: /
title: "Home"
author_profile: false
classes: wide
---

<div class="hero-slideshow">
  <div class="hero-slideshow__track">
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/painter_from_company_website.gif' | relative_url }}" alt="Autonomous painting robot">
      <span class="hero-slideshow__label">Painting Robot <small>Source: C3 Construction Robotics</small></span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/concept_tracker_web_interface_1.png' | relative_url }}" alt="Concept Tracker web interface">
      <span class="hero-slideshow__label">Concept Tracker — Web UI</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/bored_pile_project_during_operation.jpg' | relative_url }}" alt="Cable robot during operation">
      <span class="hero-slideshow__label">Cable Robot — Field Operation</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/bored_pile_project_mid_air_testing.jpg' | relative_url }}" alt="Mid-air testing">
      <span class="hero-slideshow__label">Cable Robot — Mid-Air Testing</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/bored_pile_project_eletrical_box.jpg' | relative_url }}" alt="Electrical control box">
      <span class="hero-slideshow__label">Cable Robot — Control Box</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/msc_project_hardware.jpg' | relative_url }}" alt="MSc mobile robot prototype">
      <span class="hero-slideshow__label">MSc — Expandable Mobile Robot</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/building_my_own_designed_3d_printer.jpg' | relative_url }}" alt="Custom 3D printer build">
      <span class="hero-slideshow__label">Custom FDM 3D Printer</span>
    </div>
    <!-- duplicate for seamless loop -->
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/painter_from_company_website.gif' | relative_url }}" alt="Autonomous painting robot">
      <span class="hero-slideshow__label">Painting Robot <small>Source: C3 Construction Robotics</small></span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/concept_tracker_web_interface_1.png' | relative_url }}" alt="Concept Tracker web interface">
      <span class="hero-slideshow__label">Concept Tracker — Web UI</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/bored_pile_project_during_operation.jpg' | relative_url }}" alt="Cable robot during operation">
      <span class="hero-slideshow__label">Cable Robot — Field Operation</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/bored_pile_project_mid_air_testing.jpg' | relative_url }}" alt="Mid-air testing">
      <span class="hero-slideshow__label">Cable Robot — Mid-Air Testing</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/bored_pile_project_eletrical_box.jpg' | relative_url }}" alt="Electrical control box">
      <span class="hero-slideshow__label">Cable Robot — Control Box</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/msc_project_hardware.jpg' | relative_url }}" alt="MSc mobile robot prototype">
      <span class="hero-slideshow__label">MSc — Expandable Mobile Robot</span>
    </div>
    <div class="hero-slideshow__item">
      <img src="{{ '/assets/images/projects/building_my_own_designed_3d_printer.jpg' | relative_url }}" alt="Custom 3D printer build">
      <span class="hero-slideshow__label">Custom FDM 3D Printer</span>
    </div>
  </div>
</div>

## What I Do

I have hands-on experience across multiple layers of robotic systems:

- **Mechanical** — end effectors, compliance mechanisms, DFMA
- **Electronics** — custom PCBs, sensor fusion, motor control
- **Embedded** — Teensy, ESP32, serial protocols, real-time control
- **Software** — ROS2, PySide6/Qt, Python, C++
- **Intelligence** — LLM-driven architectures, adaptive systems

Currently at **C3 Construction Robotics** in Hong Kong, working on autonomous robotic systems for industrial surface treatment. My role spans mechanical design, embedded systems, controls, and operator-facing software.

## Featured Projects

<div class="feature__wrapper">
{% for project in site.projects %}
  {% if project.featured %}
  <div class="feature__item">
    <div class="archive__item">
      {% if project.header.teaser %}
        <div class="archive__item-teaser">
          <img src="{{ project.header.teaser | relative_url }}" alt="{{ project.title }}">
        </div>
      {% endif %}
      <div class="archive__item-body">
        <h2 class="archive__item-title">
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
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
