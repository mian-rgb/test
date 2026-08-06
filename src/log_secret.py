def log_token():
    token = "sensitive-token-12345"
    # BAD: logging secrets
    print("Auth token:", token)
