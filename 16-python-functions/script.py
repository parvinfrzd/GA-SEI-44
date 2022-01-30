
## 1: Write a function named sum_to that accepts a single integer, n, and returns the sum of the integers from 1 to n.
def sum_to(n): 
    result = 0
    for i in range(1, n+1):
        result += i
    print(result) 

sum_to(6)
sum_to(10)

## 2: Write a function named largest that takes a list of numbers as an argument and returns the largest number in that list.

def largest (arr): 
    arr.sort()
    return arr[len(arr)-1]

print(largest([1, 2, 3, 4, 0])) # returns 4
print(largest([10, 4, 2, 231, 91, 54]) ) # returns 231


## 3: Write a function named occurances that takes two string arguments as input and counts the number of occurances of the second string inside the first string.

def occurances(string01, string02): 
    print(string01.count(string02))
    
occurances('fleep floop', 'e')   # returns 2
occurances('fleep floop', 'p')   # returns 2
occurances('fleep floop', 'ee')  # returns 1
occurances('fleep floop', 'fe')  # returns 0


## 4: Write a function named product that takes an arbitrary number of numbers, multiplies them all together, and returns the product.
def product(*args):
    result = 1
    for arg in args: 
        result *= arg
        
    print(result)

product(-1, 4) # returns -4
product(2, 5, 5) # returns 50
product(4, 0.5, 5) # returns 10.0