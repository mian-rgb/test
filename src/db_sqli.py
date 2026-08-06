def get_user_by_username(conn, username):
    # BAD: SQL built via string interpolation -> SQL injection
    query = "SELECT * FROM users WHERE username = '%s'" % username
    # In real code this would execute the query; return string to make the pattern detectable
    return query
