---
title: "Expandable-Wheelbase Mobile Robot"
excerpt: >-
  MSc thesis project — a four-wheel independently-steered mobile platform
  with a linear extending mechanism for adjustable wheelbase and tilt control.
order: 4
featured: true
header:
  teaser: /assets/images/projects/msc_project_hardware.jpg
  overlay_image: /assets/images/projects/msc_project_hardware.jpg
  overlay_filter: 0.5
gallery:
  - url: /assets/images/projects/msc_project_hardware.jpg
    image_path: /assets/images/projects/msc_project_hardware.jpg
    alt: "Mobile robot hardware prototype"
    title: "Prototype with four active steering wheels"
  - url: /assets/images/projects/msc_project_start_to_learn_about_electronic.jpg
    image_path: /assets/images/projects/msc_project_start_to_learn_about_electronic.jpg
    alt: "Learning electronics during the project"
    title: "Early electronics work"
---

## Overview

*MSc Thesis, CUHK, 2021–2022*

My MSc thesis at CUHK, built entirely during COVID — which meant working from my flat with no lab access. The 3D printer I built earlier turned out to be essential here.

The idea: a four-wheel mobile robot where each wheel steers independently, and the wheelbase can physically extend outward. Squeeze through a narrow gap, then widen out for stability on the other side. The extension mechanism is angled, so pushing the wheels out also tilts the platform — one actuator, two degrees of freedom. I did the kinematics in MATLAB and ran the whole thing on an ESP32 with FreeRTOS.

This was my first real embedded project. Before this I'd only done mechanical design. Figuring out FreeRTOS task scheduling while also trying to get four wheels to agree on a direction was... educational.

## Technologies

`ESP32` · `FreeRTOS` · `SolidWorks` · `MATLAB` · `Kinematics` · `Prototyping`

## Gallery

{% include gallery caption="Photos from prototype development." %}
