n = int(input())
arr = [n]
cnt = -1

for i in range(n):
    ele = int(input())
    arr.append(ele)

for i in arr:
    if i > 0:
        cnt = cnt + 1
print(cnt)