import random

def generate_three_random_numbers(min_value, max_value):
 numbers = random.sample(range(min_value, max_value + 1), 3)
 return numbers

# Ввод диапазона
min_value = -1000
max_value = 1000

# Вызов функции и вывод результатов
#result = generate_three_random_numbers(min_value, max_value)
result0 = '50 250 30'
print("Три случайных числа:", result0)
'''a = result[0]
b = result[1]
c = result[2]
print(f'xxx {a} yyy {b} zzz {c}')'''

result = result0.split(' ')
print(result[0])
result[0] = int(result0[0])
result[1] = int(result0[1])
result[2] = int(result0[2])
print(result[0]*2)
print(type(result[0]))

print(type(result0[0]))
result0.sort()
print(result0[1])

