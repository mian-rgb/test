# Authentication helpers with intentional issues (hard-coded credential and weak hash)

HARD_CODED_PASSWORD = "P@ssw0rd"  # BAD: hard-coded credential


def check_password(pw):
    return pw == HARD_CODED_PASSWORD


def hash_password(pw):
    # BAD: not a proper hash, just reverses the string
    return pw[::-1]
