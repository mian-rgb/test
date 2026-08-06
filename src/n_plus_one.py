# Example N+1 pattern: calling get_item in a loop causing multiple DB calls

def get_items(db, ids):
    results = []
    for i in ids:
        # BAD: calling DB per item instead of batching
        results.append(db.get_item(i))
    return results
