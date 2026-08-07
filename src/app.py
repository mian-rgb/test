def add(a, b):
    # Intentional bug: should be a + b
    return a - b

if __name__ == "__main__":
    print(add(2, 3))
