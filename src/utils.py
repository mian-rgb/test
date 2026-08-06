# Utility demonstrating a mutable default-argument bug

def append_to_list(val, lst=[]):
    """Appends to a default list (mutable default argument) which causes state to persist across calls."""
    lst.append(val)
    return lst
