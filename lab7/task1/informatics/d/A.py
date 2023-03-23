n = int(input())
arr = []

for i in range(n):
    ele = input()
    arr.append(ele)

for i in range(n):
    if i % 2 == 0:
        print(arr[i], end=" ")