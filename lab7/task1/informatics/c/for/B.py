a = int(input("first number: "))
b = int(input("second number: "))
c = int(input("reminder: "))
d = int(input("delimeter : "))

for i in range(a, b):

    if i % d == c:
        print(i, end=" ")