ATABASE = {
    'Сергей': 'Омск',
    'Соня': 'Москва',
    'Миша': 'Москва',
    'Дима': 'Челябинск',
    'Алина': 'Красноярск',
    'Егор': 'Пермь',
    'Коля': 'Красноярск'
}

def format_count_friends(count_friends):
    if count_friends == 1:
        return '1 друг'
    elif 2 <= count_friends <= 4:
        return f'{count_friends} друга'
    else:
        return f'{count_friends} друзей'

def process_anfisa(question):
    #print(query)
    #query = query.split(',') # разделили строчку по запятой
    #print(query)
    #query = query[1].strip(' ') #выделилиВТОРОЙ элемент строчки,чтоб работать с ним.
    #print(question)
    if question == 'сколько у меня друзей?':
        count_string = format_count_friends(len(DATABASE))
        #print('число друзей есть')
        return f'У тебя {count_string}'
    elif question == 'кто все мои друзья?':
        friends_string = ', '.join(DATABASE.keys())
        return f'Твои друзья: {friends_string}'
    elif question == 'где все мои друзья?':
        unique_cities = set(DATABASE.values())
        cities_string = ', '.join(unique_cities)
        return f'Твои друзья в городах: {cities_string}'
    else:
        return '<неизвестный запрос>'

def process_friend(name, question):
    if name in DATABASE:
        if question == 'ты где?':
            return f'{name} в городе {DATABASE[name]}'
        else:
            return '<неизвестный запрос>'
    else:
        return f'У тебя нет друга по имени {name}'    
    
def process_query(query):
    tokens = query.split(',')
    name = tokens[0].strip(' ')
    #print(name)
    #print(tokens)
    question = tokens[1].strip(' ')
    #print(question)
    if name == 'Анфиса':
        #print('имя точно анфиса')
        process_anfisa(question)
        return process_anfisa(question)
    elif name != 'Анфиса':
        process_friend(name, question)
        return process_friend(name, question)

def runner():
    queries = [
        'Анфиса, сколько у меня друзей?',
        'Анфиса, кто все мои друзья?',
        'Анфиса, где все мои друзья?',
        'Анфиса, кто виноват?',
        'Коля, ты где?',
        'Соня, что делать?',
        'Антон, ты где?'
    ]
    for query in queries:
        print(query, '-', process_query(query))

runner()


{'Сергей': 'Омск', 'Соня': 'Москва', 'Миша': 'Москва', 'Дима...
     ^
