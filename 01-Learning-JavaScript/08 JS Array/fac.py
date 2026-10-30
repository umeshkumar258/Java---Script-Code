def factorial(n):
    if n < 0:
        return "Not possible"

    result = 1

    for i in range(1, n + 1):
        result = result * i

    return result


num = int(input("Enter a number: "))

print("Factorial:", factorial(num))
