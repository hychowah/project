---
title: "Autonomous Suspended Painting Robot"
excerpt: >-
  Sole engineer on a distributed autonomous system for roller-painting
  industrial tank interiors — 5 compute nodes, ROS2, custom PCBs, and
  real-time stability control.
order: 1
featured: true
header:
  teaser: /assets/images/projects/painting-robot-teaser.jpg
  overlay_image: /assets/images/projects/painting-robot-hero.jpg
  overlay_filter: 0.5
gallery:
  - url: /assets/images/projects/roller-design.png
    image_path: /assets/images/projects/roller-design.png
    alt: "Roller design with suspension and steering mechanism"
    title: "Roller end effector with passive compliance and active steering"
  - url: /assets/images/projects/surface-finish.png
    image_path: /assets/images/projects/surface-finish.png
    alt: "Surface finish improvement"
    title: "Surface finish result after iterative design improvements"
  - url: /assets/images/projects/pcb-design.jpg
    image_path: /assets/images/projects/pcb-design.jpg
    alt: "Custom PCB for electronic pressure regulation"
    title: "Custom PCBA for spray and roll application control"
  - url: /assets/images/projects/pneumatic-system.jpg
    image_path: /assets/images/projects/pneumatic-system.jpg
    alt: "Pneumatic flow control system"
    title: "Completed pneumatic system for paint flow control"
  - url: /assets/images/projects/flow-meter.png
    image_path: /assets/images/projects/flow-meter.png
    alt: "Positive displacement flow meter"
    title: "Gear-type flow meter showing zero paint residue after testing"
toc: true
---

## Overview

An autonomous suspended robotic system designed for roller-painting the interior walls of large industrial storage tanks. I am the **sole engineer** on this project, responsible for the entire system — mechanical design, electronics, embedded firmware, control software, and operator interfaces.

The robot is suspended from the tank rim and traverses vertically while applying paint with a motorized roller. The key engineering challenges include maintaining consistent contact force on curved surfaces, damping pendulum swing in outdoor conditions, and achieving production-grade surface finish quality.

**Status:** Pre-commissioning, targeting first deployment in April 2026.

## System Architecture

The system is a **distributed multi-node architecture** spanning 5+ compute nodes, communicating over ROS2:

| Node | Hardware | Role |
|------|----------|------|
| **Operator Controller** | Steam Deck (Linux) | PySide6/QML touch UI, workflow management, telemetry display |
| **End Effector** | LattePanda / Raspberry Pi 5 | Stability control, Teensy serial interface, camera |
| **Base Station** | Raspberry Pi 5 | Winch control, camera, NTP synchronization |
| **Paint Controller** | ESP32-C3 | Paint valve, flow meter, E-paper display, UDP comms |
| **LiDAR Node** | Unitree L1 | FAST-LIO2 / Point-LIO for 3D mapping and odometry |

## Key Engineering

### Stability Control

The robot uses a **redundant thrust-vectoring system** with dual gimbal-mounted propellers to maintain constant normal force against the tank wall while damping pendulum swing. The control logic combines:

- PID control for force regulation
- **Constrained optimization** (NLopt) for real-time thrust allocation
- **Kalman filtering** for angle estimation from noisy IMU data
- **OpenCV optical flow** from the front camera to detect and damp swing motion

The stability controller is implemented in C++ (~28KB) with a Python/C++ comparison test suite to validate the optimization solver.

### Operator Interface

A custom **PySide6/QML application** running on a Steam Deck provides:

- Multi-screen layout with bird's-eye view and video streaming overlays
- Workflow engine with position-triggered actions and implicit dependency tracking
- Real-time telemetry from all nodes
- GStreamer-based video streaming with simultaneous recording

### Electronics & Embedded

- **Custom PCBs** for power distribution, sensor fusion, and motor control
- **ESP32-C3 firmware** for paint valve control with positive-displacement flow metering
- Serial protocol design with message type enums and byte-level parsing
- E-paper display for flow status, UDP communication layer

### End Effector Design

Iterative mechanical design of the roller assembly:

1. Initial rigid mount → poor surface finish due to inconsistent contact
2. Added **2-DOF passive compliance mechanism** for automatic surface conformance
3. Added **active steering** for controlled roller orientation
4. Integrated **free-rotating joints** to solve paint hose twist issues
5. Designed **3m extension adapter** for reaching lower tank sections

## Gallery

{% include gallery caption="Selected development photos from the project." %}

## Technologies

`ROS2` · `Python` · `C++` · `PySide6/QML` · `Embedded C++ (Teensy, ESP32)` · `NLopt` · `OpenCV` · `GStreamer` · `Kalman Filter` · `FAST-LIO2` · `PCB Design` · `SolidWorks`
