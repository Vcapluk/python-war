print('Программа, в которой рассчитывается сумма и произведение цифр положительного трёхзначного числа')
a1 = False

while a1 == False:
    try:
        a = int(input("Введите число: "))
        a3 = a/100
        a3 > 1
        a3 <10
        #print(a3)
        if len(str(a)) == 3:
            a2 = str(a)
            print('Сумма цифр =', int(a2[0]) + int(a2[1]) + int(a2[2]))
            print('Произведение цифр =', int(a2[0]) * int(a2[1]) * int(a2[2]))
            a1 = True
            break
        else:
            print('Ошибочка вышла, надо 3-х значное!')
    except ValueError:
        print("Это разве число?")
    else:
        print('Давайте ещё разик!')
        #a1 = True

a = input("Записал? Жми Enter!")