---
title: "Autonomous Suspended Painting Robot"
excerpt: >-
  Full-stack robot development centered on ROS2 controls, wall-alignment
  estimation, and operator tooling for a suspended coating system.
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
  - url: /assets/images/projects/painter_ui_screencast.gif
    image_path: /assets/images/projects/painter_ui_screencast.gif
    alt: "Operator interface on the handheld device"
    title: "Operator UI with live telemetry, workflow state, and video"
---

## Overview

*C3 Construction Robotics, Mar 2024 – Present*

A suspended robot that coats large industrial structures autonomously. It hangs from the structure edge, moves along the surface while suspended in open air, and has to stay stable around geometry that is curved, irregular, and exposed to field conditions.

My work spans a broad slice of the system: ROS2 control software, embedded hardware integration, operator tooling, camera and telemetry infrastructure, and the supporting electronics and field-ready interfaces needed to make the robot usable outside a lab setting. The software control layer is the center of that work, because the machine behaves like a pendulum, yaw drift is persistent, and wall alignment is not stable by default. The job is to turn that full stack into a system that stays predictable enough to run repeatable coating passes.

## Control Architecture

I built the ROS2 control stack as a multi-node system coordinating the drive, winch, end-effector, and support subsystems. That includes the interfaces to embedded controllers over serial and UDP, device discovery and reconnection logic, and the abstractions the rest of the application depends on so hardware can be commanded consistently in both field and test scenarios.

For wall-relative control, I focused on yaw stabilization and actuator coordination rather than simple direct-output control. The controller computes the moment and force requirements needed to keep the tool aligned, and a constrained allocation layer determines how the vectorable propellers should respond within the robot's physical limits. Gain scheduling by arm extension keeps the same control structure usable across changing pendulum dynamics as the mechanism moves through its working range.

## Perception And Estimation

The alignment layer runs on top of wall-relative state estimation. LiDAR data is reduced into a geometric view of the nearby surface so the software can estimate lateral offset and angular deviation on both flat and curved structures. That estimate is fused with IMU rotation updates to stay usable even when the LiDAR signal is partial or intermittent, which is important in outdoor operation where measurements are not always clean.

This perception stack exists to support the controller, not as a separate demo pipeline. The estimated wall angle feeds back into the alignment loop so the robot can correct drift while maintaining a stable relationship to the surface being coated.

## Operator Interface And Field Tooling

I also built the operator-facing software that makes the system practical to deploy. The UI runs on a handheld Linux device using Python, PySide6, and QML, with live telemetry, multi-page controls, multi-display support, camera feeds, and emergency control flows designed for field use rather than lab demos.

Around that UI, I added the workflow execution and support tooling needed for real operation: YAML-defined workflow sequencing, time- and position-based triggers, GStreamer and OpenCV camera pipelines, remote data logging, local screen recording, and device-status monitoring. That lets operators run semi-autonomous coating passes while still having direct visibility into system state, video, and recovery actions.

**Technologies:** `ROS2` · `Python` · `C++` · `PySide6/QML` · `Embedded C++` · `Serial / UDP hardware interfaces` · `NLopt` · `LiDAR + IMU estimation` · `OpenCV` · `GStreamer` · `Electronics integration`

{% include gallery caption="Source: C3 Construction Robotics" %}
