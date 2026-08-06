import os

def save_upload(filename, content):
    # BAD: no filename sanitization; allows directory traversal
    path = os.path.join('/var/www/uploads', filename)
    with open(path, 'wb') as f:
        f.write(content)
    return path
