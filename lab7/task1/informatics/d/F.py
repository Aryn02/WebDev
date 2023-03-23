n = int(input())
arr = []
cnt = 0

for i in range(n):
    ele = int(input())
    arr.append(ele)
    
for i in range(1, n - 1):
    if arr[i] > arr[i - 1] and arr[i] > arr[i + 1]:
        cnt += 1
print(cnt)
