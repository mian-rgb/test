import threading

GLOBAL = {}

def increment(k):
    # BAD: no locking around shared state -> race condition
    GLOBAL[k] = GLOBAL.get(k, 0) + 1
