def divide(a, b):
    """Divide a by b.

    Intentional bugs:
    - Returns a string instead of a number
    - Uses integer division (//) which is wrong for floats
    - Returns a string message on divide-by-zero instead of raising
    """
    if b == 0:
        # Bad: swallow error and return a string message
        return "Cannot divide by zero"
    # Bad: integer division and return as string
    return str(a // b)


def insecure_eval(expr):
    """Intentionally insecure helper that uses eval on input.

    This should trigger a security/code-smell review.
    """
    return eval(expr)
