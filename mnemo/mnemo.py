from tkinter import *
from tkinter import ttk
from tkinter.ttk import Checkbutton 

root = Tk()
root.title("***Vcapluk***")
root.geometry("400x200")

#label1 = ttk.Label(text='Программа для расчета числа', width=200, justify=CENTER)
#label1.pack()

#chk_state = BooleanVar()  
#chk_state.set(True)  # задайте проверку состояния чекбокса
chk = Checkbutton(root, width=5, text = '0')  
chk.grid(column=1, row=1, padx=1, pady=1)

chk1 = Checkbutton(root, width=5, text = '012')  
chk1.grid(column=1, row=2, padx=10, pady=10)
chk2 = Checkbutton(root, width=5, text = '022')  
chk2.grid(column=2, row=2, padx=1, pady=1)
chk3 = Checkbutton(root, width=5, text = '033')  
chk3.grid(column=3, row=3, padx=1, pady=1)
chk4 = Checkbutton(root, width=5, text = '041')  
chk4.grid(column=4, row=1, padx=1, pady=1)
chk5 = Checkbutton(root, width=5, text = '057')  
chk5.grid(column=5, row=7, padx=1, pady=1)
chk6 = Checkbutton(root, width=5, text = '063')  
chk6.grid(column=6, row=3, padx=1, pady=1)
chk7 = Checkbutton(root, width=5, text = '099')  
chk7.grid(column=9, row=9, padx=1, pady=1)


#chk = Checkbutton(root, text='Выбрать')

root.mainloop()

