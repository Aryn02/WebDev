
n = int(input())

arr  = []

for i in range(n):
    ele = int(input())
    arr.append(ele)

arr.sort()

arr = list(set(arr))
print(arr[-2])