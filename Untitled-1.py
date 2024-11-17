from cProfile import label
from email import message
from tkinter import *
from tkinter import ttk



def show_message():
    label["text"] = entry.get()
    a = entry.get()
    message_one(a)

 
root = Tk()
root.title("Vcapluk")
root.geometry("400x200")

message = StringVar()

label1 = ttk.Label(text='Программа для расчета числа', width=200, justify=CENTER)
label1.pack()

entry = ttk.Entry(textvariable = message)
entry.pack(anchor=NW, padx = 6, pady=6)

btn1 = ttk.Button(text="Ok!", command=show_message)
btn1.pack(side = RIGHT,anchor=NW, padx = 6, pady=6)

label = ttk.Label()
label.pack(anchor=NW, padx = 6, pady=6)


#print('Программа, в которой рассчитывается сумма и произведение цифр положительного трёхзначного числа')
def message_one(a):
    print('вошли')
    a1 = False
    a999 = 1
    while a1 == False:
        try:
            a = int(input("Введите число: "))
            a3 = a/100
            a3 > 1
            a3 <10
            a999 = str(a)
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


'''a1 = False
a999 = 1
while a1 == False:
    try:
        a = int(input("Введите число: "))
        a3 = a/100
        a3 > 1
        a3 <10
        a999 = str(a)
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

a000 = input("Записал? Жми Enter!")

tmpl = f"""Число: {num}
Сумма цифр = {sum(a2)}
Произведение цифр = {reduce(mul, a2)}

конец...
"""

with open("tmp.txt","a+") as f:
    f.write(tmpl)

f = open("C:/basketDELET/111.txt","a+")
f.write('Число:')
f.write(a999)
f.write('\n')
f.write('Сумма цифр =')
f11 = str((int(a2[0]) + int(a2[1]) + int(a2[2])))
f.write(f11)
f.write('\n')
f.write('Произведение цифр =')
f21 = str((int(a2[0]) * int(a2[1]) * int(a2[2])))
f.write(f21)
f.write('\n\n')
f.close()
print('конец...')
'''

root.mainloop()