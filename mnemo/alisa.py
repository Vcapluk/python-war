#import tkinter as tk
from tkinter import *
from tkinter import ttk
from tkinter.ttk import Checkbutton 

root = Tk()
root.withdraw() # hide the root window

n = 9 # количество чекбоксов
row = n // 2 # количество строк
col = n # количество столбцов

checkbutton1 = Checkbutton(root, text='Чекбокс')
checkbutton1.grid(row=1, column=1, padx=1, pady=1)
checkbutton2 = Checkbutton(root, text='Чекбокс')
checkbutton2.grid(row=1, column=2, padx=1, pady=1)
checkbutton3 = Checkbutton(root, text='Чекбокс')
checkbutton3.grid(row=2, column=3, padx=1, pady=1)
checkbutton4 = Checkbutton(root, text='Чекбокс')
checkbutton4.grid(row=2, column=4, padx=1, pady=1)
checkbutton5 = Checkbutton(root, text='Чекбокс')
checkbutton5.grid(row=3, column=5, padx=1, pady=1)
checkbutton6 = Checkbutton(root, text='Чекбокс')
checkbutton6.grid(row=3, column=6, padx=1, pady=1)
checkbutton7 = Checkbutton(root, text='Чекбокс')
checkbutton7.grid(row=4, column=7, padx=1, pady=1)

'''for i in range(row):
    for j in range(col):
        checkbutton = Checkbutton(root, text='Чекбокс')
        checkbutton.grid(row=i, column=j, padx=1, pady=1)
'''
root.mainloop()

#c:/Users/Владимир/ProgramsVC/python-war/mnemo/alisa.py
#C:/Users/Владимир/AppData/Local/Programs/Python/Python313/python.exe

# & C:/Users/Владимир/AppData/Local/Programs/Python/Python313/python.exe c:/Users/Владимир/ProgramsVC/python-war/mnemo/alisa.py