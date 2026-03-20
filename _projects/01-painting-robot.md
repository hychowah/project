---
title: "Autonomous Suspended Painting Robot"
excerpt: >-
  End-to-end development of an autonomous suspended robot for coating
  large industrial structures, covering mechanical design, controls,
  embedded systems, and operator tools.
order: 2
featured: true
header:
  teaser: /assets/images/projects/painter_from_company_website.gif
  overlay_image: /assets/images/projects/painter_from_company_website.gif
  overlay_filter: 0.5
gallery:
  - url: /assets/images/projects/painter_from_company_website.gif
    image_path: /assets/images/projects/painter_from_company_website.gif
    alt: "Autonomous painting robot in operation"
    title: "Painting robot — source: C3 Construction Robotics"
---

## Overview

A suspended robot that coats large industrial structures autonomously. It hangs from the structure edge, moves along the curved surface, and applies coating — outdoors, in wind, on geometry that doesn't stay constant.

I handle most of the technical stack: mechanical design, custom PCBs, embedded firmware (Teensy, ESP32), the ROS2 control architecture, and the operator UI. The interesting engineering problems are in stability — keeping consistent wall contact on a curved surface while damping pendulum swing. That's where the constrained optimization (NLopt), Kalman filtering, and optical flow come in.

The operator interface runs on a handheld Linux device with a custom PySide6/QML UI, live camera feeds via GStreamer, and a workflow engine that tracks position-triggered actions.

**Technologies:** `ROS2` · `Python` · `C++` · `PySide6/QML` · `Embedded C++ (Teensy, ESP32)` · `NLopt` · `OpenCV` · `GStreamer` · `Kalman Filter` · `FAST-LIO2` · `PCB Design` · `SolidWorks`

{% include gallery caption="Source: C3 Construction Robotics" %}
