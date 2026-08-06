def insecure_eval(inp):
    # BAD: using eval on untrusted input
    return eval(inp)


def insecure_exec(code):
    # BAD: using exec on potentially untrusted code
    local_vars = {}
    exec(code, {}, local_vars)
    return local_vars
