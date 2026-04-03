---
title: Istio Ambient Mode Demo
---

# Istio Ambient Mode Demo

---

## 🧠 Overview

This lab demonstrates Istio Ambient Mode, a modern service mesh approach that eliminates sidecars and uses a shared data plane.

---

## 🎯 Objectives

- Install Istio Ambient mode
- Deploy sample services
- Enable secure communication
- Observe traffic flow

---

## 🏗 Architecture

Client → Ztunnel → Waypoint Proxy → Service

---

## ⚙️ Prerequisites

- Kubernetes cluster (EKS recommended)
- kubectl
- Istio CLI

---

## 🚀 Step 1: Install Istio (Ambient Mode)

```bash
istioctl install --set profile=ambient -y