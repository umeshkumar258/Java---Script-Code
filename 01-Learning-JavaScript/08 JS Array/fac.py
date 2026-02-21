def factorial(n):
    """Return factorial of a number."""
    if n < 0:
        return "Factorial is not defined for negative numbers."
    
    result = 1
    for i in range(1, n + 1):
        result *= i   # cleaner multiplication
    
    return result


# Taking user input
try:
    num = int(input("Enter a number: "))
    print("Factorial:", factorial(num))
except ValueError:
    print("Please enter a valid integer.")
