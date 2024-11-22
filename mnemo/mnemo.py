from tkinter import *
from tkinter import ttk
from tkinter.ttk import Checkbutton 
import tkinter as tk


root = Tk()
root.title("***Vcapluk***")
root.geometry("1000x200")

enabled_on_b = "Вкачена"
enabled_off_b= "В ремонтном положении"

enabled_on_zn = "Заземлено"
enabled_off_zn = "ЗН отключены"

columns = ("Секция", "Ячейка", "ЗН", "ПЗ", "Заметки")

tree = ttk.Treeview(root, columns=columns, show="headings")
tree.pack(fill=BOTH, expand=False)

tree.heading("Секция", text="Секция")
tree.heading("Ячейка", text="Ячейка")
tree.heading("ЗН", text="ЗН")
tree.heading("ПЗ", text="ПЗ")
tree.heading("Заметки",text="Заметки")


people = (
    ("00ВВС01", 1, "+", "-", "Ввод"),
    ("00ВВС01", 3, "+", "-", "ТН 6кВ"),
    ("00ВВС01", 5, "+", "-"),
    ("00ВВС01", 7, "+", "-")
)



for person in people:
    tree.insert("", END, values=person)





'''bb = ["БН-1", "БН-2", "БН-3", "БН-4", "БН-5", "БН-6", "БН-7", "БН-8"]
bb_len = len(bb)

for i in range(bb_len):
    chk0 = Checkbutton(root, width = 5, text = bb[i])
    chk0.grid(column=1, row = i, padx=2, pady=2)'''





'''
chk1 = Checkbutton(root, width=5, text = 'Яч', offvalue=enabled_off_b, onvalue=enabled_on_b)  
chk1.grid(column=1, row=2, padx=1, pady=1)
chk2 = Checkbutton(root, width=5, text = 'ЗН', offvalue=enabled_off_zn, onvalue=enabled_on_zn)  
chk2.grid(column=2, row=2, padx=1, pady=1)
chk3 = Checkbutton(root, width=5, text = 'Яч', offvalue=enabled_off_b, onvalue=enabled_on_b)  
chk3.grid(column=1, row=3, padx=1, pady=1)
chk4 = Checkbutton(root, width=5, text = 'ЗН', offvalue=enabled_off_zn, onvalue=enabled_on_zn)  
chk4.grid(column=2, row=3, padx=1, pady=1)
chk5 = Checkbutton(root, width=5, text = 'Яч')  
chk5.grid(column=1, row=4, padx=1, pady=1)
chk6 = Checkbutton(root, width=5, text = 'ЗН')  
chk6.grid(column=2, row=4, padx=1, pady=1)
chk7 = Checkbutton(root, width=5, text = 'Яч')  
chk7.grid(column=1, row=5, padx=1, pady=1)
chk8 = Checkbutton(root, width=5, text = 'ЗН')  
chk8.grid(column=2, row=5, padx=1, pady=1)
'''
#chk = Checkbutton(root, text='Выбрать')



root.mainloop()

