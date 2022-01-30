# exercise-04 What kind of Triangle?

# Write the code that:
# 1. Prompts the user to enter the three lengths of a triangle (one at a time):
#      Enter the lengths of three side of a triangle:
#      a: 
#      b:
#      c:
# 2. Write the code that determines if the triangle is:
#      equalateral - all three sides are equal in length
#      scalene - all three sides are unequal in length
#      isosceles - two sides are the same length
# 3. Print a message such as:
#      - A triangle with sides of <a>, <b> & <c> is a <type of triangle> triangle
x, y, z = input("Enter the lengths of three side of a triangle: ").split()

sides = [x, y, z]

if(x == y and y == z): 
    print(f'A triangle with sides of {x}, {y} & {z} is a equalateral triangle')
elif(x != y and x != z and y != z): 
    print(f'A triangle with sides of {x}, {y} & {z} is a isosceles triangle')
else: 
    print(f'A triangle with sides of {x}, {y} & {z} is a scalene triangle')

# iterator = iter(sides)
# print(iterator)
# first_item = next(iterator) 

# for i in iterator: 
#     if (i == first_item): 
#         print(f'A triangle with sides of {x}, {y} & {z} is a equalateral triangle')
#     elif (i != first_item): 
#         print(f'A triangle with sides of {x}, {y} & {z} is a isosceles triangle')
#     else: 
#         print(f'A triangle with sides of {x}, {y} & {z} is a scalene triangle')