import sys
from PyQt6.QtWidgets import QApplication, QWidget, QTextEdit,QGridLayout
from PyQt6.QtGui import QFont
from PyQt6.QtCore import Qt


class Subs(QTextEdit):
    def __init__(self):
        super().__init__()
        font = QFont("Times New Roman")
        font.setPointSize(30)
        self.setFont(font)
        self.setText("Center Placeholder")
        self.setFixedWidth(500)
        self.setAlignment(Qt.AlignCenter)


class SecondarySub(QTextEdit):
    def __init__(self, parents):
        super().__init__()
        self.parents = parents
        self.setText("placeholder")
        font = QFont("Times New Roman")
        font.setPointSize(30)
        self.setFont(font)
        self.setAlignment(Qt.AlignCenter)
        self.setFixedWidth(1000)
        self.setFixedHeight(100)


class Window(QWidget):
    def __init__(self):
        super().__init__()
        grid_lay = QGridLayout()
        self.setLayout(grid_lay)
        self.widget_sub = Subs()

        self.widget_sub.setFixedWidth(800)
        self.widget_sub.setFixedHeight(50)
        print(self.widget_sub)

        # widgets
        grid_lay.addWidget(SecondarySub(self.widget_sub))
        grid_lay.addWidget(SecondarySub(self.widget_sub))
        grid_lay.addWidget(self.widget_sub)
        grid_lay.setAlignment(Qt.AlignCenter)
        self.setLayout(grid_lay)


app = QApplication(sys.argv)
window = Window()
window.show()
sys.exit(app.exec())