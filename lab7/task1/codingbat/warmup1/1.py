def sleep_in(weekday, vacation):
    if (weekday == False) or vacation:
        print(True)
    else:
        print(False)

day = int(input("Enter 1 if true 0 if false: "))

vac = int(input("Enter 1 if true 0 if false: "))
sleep_in(day, vac)