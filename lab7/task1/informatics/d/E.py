n = int(input())
arr = []
check = False

for i in range(n):
    ele = int(input())
    arr.append(ele)
    
for i in range(1,n):
    if arr[i] == arr[i - 1]:
        print("YES")
        check = True
        break
if check == False:
    print("NO")
