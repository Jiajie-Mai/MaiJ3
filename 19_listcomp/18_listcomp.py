#Jiajie Mai
#SoftDev2 pd6
#K#19--Ready, Set, Math!
#2019-04-17

a = [1,2,3]
b = [2,3,4]
u = ["white","black"]

#['00','22','44','66','88']
def function1(list):
    result = []
    for x in range(5):
        result.append(str(22 * x))
    print(result)
    result = [str(2*x)+str(2*x) for x in range(5)]
	print(result)
	return result

#[7,17,27,37,47]

def function2(list):
    result = []
    for x in range(5):
        result.append(7 + 10 * x)
    print(result)
	result = [7 + 10 * x for x in range(5)]
	print(result)
	return result

#[0,0,0,0,1,2,0,2,4]
def function3(list):
    result = []
    for x in range(9):
        if (x % 3 == 0):
            result.append(0)
        elif (x % 1 == 1):
            result.append(int(x / 3))
        else:
            result.append(2 * int(x / 3))
    print(result)
    result = [0 if x % 3 == 0 else int(x/3) if x % 3 == 1 else (2*int(x/3)) for x in range(9)]
    print(result)
    return result

#composite numbers
def function4():
    result = []
    for x in range(2, 101):
        sum = 0
        for y in range(2, x):
            if x % y == 0:
                result.append(x)
                break
	print (result)
	result = [i for i in range(2, 101) if sum([1 if i % j == 0 else 0 for j in range(2, i)]) > 0]
	print(result)
	return result

#prime numbers
def function5():
    result = []
    for x in range(2, 101):
        sum = 0
        for y in range(2, x):
            if x % y == 0:
                sum += 1
        if sum == 0:
            result.append(x)
	print (result)
	result = [i for i in range(2, 101) if sum([1 if i % j == 0 else 0 for j in range(2, i)]) == 0]
	print(result)
	return result

#finding factors for a number
def function6(num):
    result = []
    if x for range(1,101):
        if num % x:
            result.append(x)
    print(result)
	result = [x for x in range(1, n+1) if n % x == 0]
	print(result)
    return result

#switching matrix
def function7(matrix):
    result = []
    for x in range(len(matrix[0])):
        result.append([])
        for y in range(len(matrix)):
            result[x].append(matrix[y][x])
    print(result)
	result = [ [ matrix[x][y] for x in range(len(matrix)) ] for y in range(len(matrix[0])) ]
	print(result)
    return result

#pythagorean triple
def function8(num):
    result = []
    for a in range(n+1):
        for b in range(a):
            for c in range(b):
                if a*a == b*b + c*c:
                    result.append(a, b, c)
    print(result)
    result = [(x,y,z) for x in range(1,num+1) for y in range(x,num+1) for z in range(y,num+1) if x**2 + y**2 == z**2]
    print(result)

#need to make it a single line
#quick sort
def function9(list):
    result = ((quickSort([y for y in l if y < l[0]]) + [l[0]] + quickSort([x for x in l if x > l[0]])) if len(l) > 2 else l)
    print(result)

#union of sets a and b
def union(a,b):
    result = a + [x for x in b if x not in a]
    print(result)

#interection of sets a and b
def intersect(a,b):
    result = [x for x in a if x in b]
    print(result)

def set_diff(u,a):
    result = [x for x in u if x not in b]
    print(result)

def cart_prod(a,b):
    result = [(x,y) for x in a for y in b]
    print(result)

def sym_dif(a,b):
    result = [x for x in a if x not in b] + [x for x in b if x not in a]
    print(result)

function12(u,a)
function1()
function2()
function3()
function4()
function5()
function6(100)
function7([[1,2,3],[4,5,6],[7,8,9]])
function8(100)
function9([3,4,1,2,2,0,9])
union(a,b)
intersect(a,b)
set_diff(a,b)
cart_prod(a,u)
sym_dif(a,b)
