n = int(input())
arr = []
cnt = 0

for i in range(n):
    ele = int(input())
    arr.append(ele)
    
for i in range(n):
    
    if arr[i] > arr[i - 1]:
        cnt = cnt + 1
print(cnt)