# Legacy code with issues to review

import os
import sys  # unused import

GLOBAL_STATE = {}


def do_something():
    # Long function with unclear purpose, no docstring, and side effects
    for i in range(5):
        GLOBAL_STATE[f"k_{i}"] = i
    # Intentional TODO and debug print
    print("debug: populated GLOBAL_STATE")


if __name__ == "__main__":
    do_something()
