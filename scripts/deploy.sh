#!/bin/bash
# Dangerous deploy script included intentionally to trigger review

echo "Starting deploy..."
# BAD: destructive command without checks
sudo rm -rf /tmp/deploy/*
echo "Deployed (not really, this is a test script)."
