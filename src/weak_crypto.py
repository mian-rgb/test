import hashlib

# Demonstrate weak hashing (MD5) flagged by scanners
def md5_hash(s):
    return hashlib.md5(s.encode()).hexdigest()

# Placeholder note for AES ECB usage (not implemented to avoid extra deps)
# Insecure: AES in ECB mode is deterministic and should not be used for sensitive data.
