# String split and join

s = input()

def split_and_join(a):
    a = a.split(" ")
    a = "-".join(a)
    print(a)

split_and_join(s)