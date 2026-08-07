import hashlib

# Intentionally using MD5 (deprecated for security-sensitive hashing)
use_md5 = True

def hash_secret(s):
    return hashlib.md5(s.encode()).hexdigest()
