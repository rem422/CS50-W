from prime import is_Prime

def test_prime(n, expected):
    if is_prime(n) != expected:
        print(f"Error on is_prime({n}), expected {expected}")