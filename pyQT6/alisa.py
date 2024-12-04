import sys
import pickle

#import date
#import test
from PyQt6 import QtWidgets, QtCore
from PyQt6.QtCore import Qt


with open('example.txt', 'rb') as file:
    readed_data = pickle.load(file)
    print(type(readed_data), readed_data)


with open('test1.txt', 'rb') as file:
    readed_data = pickle.load(file)
    print(type(readed_data), readed_data)





class MyTable(QtWidgets.QMainWindow):
    def __init__(self):
        super().__init__()
        self.table_widget = QtWidgets.QTableWidget()
        self.setCentralWidget(self.table_widget)

        # Устанавливаем количество строк и столбцов в таблице
        self.table_widget.setRowCount(5) # строки
        self.table_widget.setColumnCount(3) #столбики

        # Создаём цикл для добавления чекбоксов в каждую ячейку таблицы
        for row in range(self.table_widget.rowCount()):# в каждую строку
            for column in range(self.table_widget.columnCount()):# для каждого столбца
                checkbox_item = QtWidgets.QTableWidgetItem(str(row))#
                if column == 1:#столбиков 3. 0, 1, 2. Здесь во второй столбик добавляем чекбоксы
                    checkbox_item.setFlags(Qt.ItemFlag.ItemIsUserCheckable | Qt.ItemFlag.ItemIsEnabled)
                    checkbox_item.setCheckState(Qt.CheckState.Unchecked)
                    checkbox_item.setText('текст  у чекбокса')
                    self.table_widget.setItem(row, column, checkbox_item)

def eventFilter(self, source, event):
    print(event)

if __name__ == "__main__":
    # Создание объекта приложения
    app = QtWidgets.QApplication(sys.argv)
    # Создание окна
    window = MyTable()
    # Отобразить окно на экране
    window.resize(330, 200)
    window.show()
    sys.exit(app.exec())