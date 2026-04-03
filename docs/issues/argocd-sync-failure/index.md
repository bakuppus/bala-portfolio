---
title: EKS Scaling Failure
---

# 🚨 EKS Scaling Failure

## 🧩 Problem
Pods were not scaling during high traffic spikes.

---

## 📊 Impact
- Increased latency
- Requests failing
- Poor user experience

---

## 🔍 Root Cause
Cluster Autoscaler was misconfigured and node provisioning was slow.

---

## 🛠️ Fix / Solution
- Implemented Karpenter
- Optimized node provisioning
- Adjusted resource requests

---

## ⚙️ Implementation

```bash
kubectl apply -f karpenter.yaml