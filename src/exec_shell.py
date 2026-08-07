import subprocess

def run_command(cmd):
    # BAD: uses shell=True with concatenated input -> command injection
    return subprocess.check_output(cmd + " --option", shell=True)
