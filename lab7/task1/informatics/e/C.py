a = int(input())
b = int(input())

def xor(a, b):
    if a == True and b == False or a == False and b == True:
        print(1)
    else:
        print(0)

xor(a, b)