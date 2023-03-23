n = int(input())
arr = [n]

for i in range(n):
    ele = int(input())
    arr.append(ele)

for i in arr:
    if i % 2 == 0:
        print(i, end=" ")