import math

def isPerfectSquare(x):
    if x >= 0:
        sr = int(math.sqrt(x))
        return (sr * sr) == x
    return False

a = int(input("first number: "))
b = int(input("second number: "))

for i in range(a, b):

    if isPerfectSquare(i):
        print(i, end=" ")