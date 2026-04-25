---
title: "Autonomous Suspended Painting Robot"
excerpt: >-
  Suspended robot development spanning mechanical design, ROS2 controls,
  and operator tooling for a field-deployed coating system.
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

I was the lead engineer and technical lead for the system, taking it from early proof-of-concept work through live spray deployment and the later roller-based redesign. The work was split across both sides of the robot: the mechanical system that had to survive field use and stay controllable while suspended, and the software stack that had to coordinate hardware, estimation, workflows, and operator-facing tools.

## Mechanical Design And Validation

I owned the mechanical design end to end: the cable suspension frame, the dual-gimbal thrust-vectoring propulsion system, the spray gun and roller end effectors, and the sealed enclosures that packaged the electronics for outdoor use. That work was not separate from the controls problem. The robot behaves like a pendulum, so the structure, actuation layout, cable routing, and mounting decisions all directly affected how stable and controllable the machine could be.

I used SolidWorks and SolidWorks Simulation for structural validation, including static FEA and buckling analysis on sheet metal structures. For lighter custom parts, I used topology optimisation to reduce mass on 3D-printed brackets while keeping enough stiffness for field loads. Mechanism work included the dual-gimbal thrust-vectoring assembly for active stabilisation, quick-change mounting for spray and roller tools, and cable routing and strain relief through moving assemblies.

Built and tested prototype iterations in-house, from proof-of-concept hardware through field-trial units. A big part of the mechanical work was choosing the right combination of sheet metal, CNC-machined parts, and 3D-printed components based on cost, development time, design constraints, weight, and safety. The goal was not just to make parts fit, but to make the system practical to fabricate, assemble, repair, and revise quickly between test cycles.

## Control Architecture

I built the ROS2 control stack as a multi-node system coordinating the drive, winch, end-effector, and support subsystems. That included interfaces to embedded controllers over serial and UDP, device discovery and reconnection logic, and the abstractions needed so hardware could be commanded consistently in both field and test scenarios. I also designed the mechanical and electrical interfaces around those controllers, so the software stack and hardware integration were developed together rather than handed off between separate disciplines.

For wall-relative control, I focused on yaw stabilization and actuator coordination rather than simple direct-output control. The controller computes the moment and force requirements needed to keep the tool aligned, and a constrained allocation layer determines how the vectorable propellers should respond within the robot's physical limits. Gain scheduling by arm extension keeps the same control structure usable across changing pendulum dynamics as the mechanism moves through its working range.

## Perception And Estimation

The alignment layer runs on top of wall-relative state estimation. LiDAR data is reduced into a geometric view of the nearby surface so the software can estimate lateral offset and angular deviation on both flat and curved structures. That estimate is fused with IMU rotation updates to stay usable even when the LiDAR signal is partial or intermittent, which is important in outdoor operation where measurements are not always clean.

This perception stack exists to support the controller, not as a separate demo pipeline. The estimated wall angle feeds back into the alignment loop so the robot can correct drift while maintaining a stable relationship to the surface being coated.

## Operator Interface And Field Tooling

I also built the operator-facing software that makes the system practical to deploy. The UI runs on a handheld Linux device using Python, PySide6, and QML, with live telemetry, multi-page controls, multi-display support, camera feeds, and emergency control flows designed for field use rather than lab demos.

Around that UI, I added the workflow execution and support tooling needed for real operation: YAML-defined workflow sequencing, time- and position-based triggers, GStreamer and OpenCV camera pipelines, remote data logging, local screen recording, and device-status monitoring. That lets operators run semi-autonomous coating passes while still having direct visibility into system state, video, and recovery actions, and it reflects how much of the deployable stack had to be built together rather than as isolated components.

**Technologies:** `ROS2` · `Python` · `C++` · `PySide6/QML` · `Embedded C++` · `Serial / UDP hardware interfaces` · `NLopt` · `Sensor fusion` · `OpenCV` · `GStreamer` · `Electronics integration` · `SolidWorks` · `SolidWorks Simulation` · `FEA` · `3D printing` · `Sheet metal` · `CNC`

{% include gallery caption="Source: C3 Construction Robotics" %}
