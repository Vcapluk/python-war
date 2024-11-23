import sys
from PyQt6 import QtWidgets, QtCore
from PyQt6.QtCore import Qt



class MyTable(QtWidgets.QMainWindow):
    def __init__(self):
        super().__init__()
        self.table_widget = QtWidgets.QTableWidget()
        self.setCentralWidget(self.table_widget)

        # Устанавливаем количество строк и столбцов в таблице
        self.table_widget.setRowCount(5)
        self.table_widget.setColumnCount(3)

        # Создаём цикл для добавления чекбоксов в каждую ячейку таблицы
        for row in range(self.table_widget.rowCount()):
            for column in range(self.table_widget.columnCount()):
                checkbox_item = QtWidgets.QTableWidgetItem(str(row))
                if column == 2:
                    checkbox_item.setFlags(Qt.ItemFlag.ItemIsUserCheckable | Qt.ItemFlag.ItemIsEnabled)
                    checkbox_item.setCheckState(Qt.CheckState.Unchecked)
                    checkbox_item.setText('')
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