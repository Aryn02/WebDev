import math

n = int(input())

n = math.ceil(math.sqrt(n))

i = 1
while i < n:
    print(int(math.pow(i, 2)), end = " ")
    i += 1