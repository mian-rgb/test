import subprocess

def ping(host):
    """Invokes system ping using shell concatenation (shell injection risk)."""
    return subprocess.check_output("ping -c 1 " + host, shell=True)
