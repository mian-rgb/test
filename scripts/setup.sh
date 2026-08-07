#!/bin/bash
# BAD: creating world-writable temp dir and unsafe permissions
mkdir -p /tmp/app_data
chmod 777 /tmp/app_data
# BAD: writing secrets to a world-readable file (for demonstration only)
echo "SECRET=topsecret" > /tmp/app_data/.env
