import pickle

def load_user_blob(stream):
    # BAD: using pickle.load on external data - insecure deserialization
    return pickle.load(stream)
