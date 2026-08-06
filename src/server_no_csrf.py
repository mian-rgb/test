# Example pseudo web handler lacking CSRF protection

def submit_form(request):
    # BAD: accepts POST data without CSRF token validation
    data = request.get('form')
    # process data...
    return True
