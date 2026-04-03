---
title: Running Microservice in AWS EKS
description: Deploy and scale microservices in Kubernetes using AWS EKS
---

# Running Microservice in AWS EKS

---

## 🧠 Overview

This lab demonstrates how to deploy and run a containerized microservice on an AWS EKS cluster with scalability, load balancing, and production-ready configurations.

---

## 🎯 Objectives

- Deploy a microservice to Kubernetes (EKS)
- Expose service using LoadBalancer / Ingress
- Enable scaling using HPA
- Validate traffic flow

---

## 🏗 Architecture

User → ALB → Kubernetes Service → Pod (Microservice)

---

## ⚙️ Prerequisites

- AWS CLI configured
- kubectl installed
- EKS cluster running
- Docker installed

---

## 🚀 Step 1: Build Docker Image

```bash
docker build -t eks-microservice .
docker tag eks-microservice:latest <ECR-URL>/eks-microservice:latest
docker push <ECR-URL>/eks-microservice:latest