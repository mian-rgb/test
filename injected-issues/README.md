# README of injected issues — lists all added anti-patterns for reviewer reference

This branch (uxpilot/all-issues) intentionally contains many security, privacy, UX, and code-quality anti-patterns so that automated reviewers (UXPilot) and human reviewers can validate detection.

Files and issues added:
- src/db_sqli.py: SQL built via string interpolation (SQL injection)
- src/exec_shell.py: subprocess with shell=True (command injection)
- src/insecure_eval.py: use of eval/exec on untrusted input (code execution risk)
- src/insecure_deser.py: pickle.load on external data (insecure deserialization)
- src/secret_hardcoded.py: hard-coded API keys / secrets
- src/weak_crypto.py: MD5 hashing (weak crypto)
- src/upload.py: unsanitized filename -> path traversal
- src/redirect.py: open redirect to user-supplied URL
- src/server_no_csrf.py: POST handler without CSRF protection
- frontend/xss.html: DOM insertion from location -> XSS
- scripts/setup.sh: world-writable directory and secrets file
- requirements.txt: pinned vulnerable packages
- tests/test_insecure.py: failing tests to surface problems
- src/n_plus_one.py: N+1 DB query pattern
- src/concurrency_race.py: race condition on global state
- src/log_secret.py: prints sensitive token

Run: pytest -q (many tests are intentionally failing). Do not execute any vulnerable code in production environments.
