def get_user_by_username(conn, username):
    """Vulnerable helper that builds SQL with string interpolation (SQL injection).

    Returns the raw query string to make it easy for tests to detect the bad pattern.
    """
    query = f"SELECT * FROM users WHERE username = '{username}'"
    # In a real implementation this would execute the query. Here we return it so tests/scanners can detect the issue.
    return query
