import random

students = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
teachers = ['x', 'y', 'z']
randomized = []

for student in students:
    randomized.insert(random.randint(0,len(students)-1),student)

print(randomized)

groups = {}
for teacher in teachers:
    groups[teacher] = []

print(groups)

i = 0
for student in randomized:
    groups[teachers[i]].append(student)
    if i == 2:
        i = 0
    else:
        i += 1

print(groups)


