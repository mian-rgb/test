def read_user_file(path):
    """Reads files from /etc/ by concatenating paths (path traversal / local file access risk)."""
    with open("/etc/" + path, "r") as f:
        return f.read()
