from urllib.parse import urlparse

def open_redirect(next_url):
    # BAD: redirects to user-provided URL without validation
    # In a real web framework you'd return a redirect response
    return next_url
