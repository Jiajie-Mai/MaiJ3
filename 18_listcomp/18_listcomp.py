#Jiajie Mai
#SoftDev2 pd6
#K#17--PPFTLCW
#2019-04-15

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

#need to redo

#composite numbers
def function4():
    result = []
    for x in range(101):
       for y in range(x*2, 50, x):
         result.append(y)
	print (result)
	result = [x for y in range(1,101) for x in range(y*2, 50, y)]
	print(result)
	return result

#need to redo

#prime numbers
def function5():
    result = []
    for x in range(101):
       for y in range(x*2, 50, x):
         result.append(y)
	print (result)
	result = [x for x in range(,101) if (x != 0 and x != 1 and x not in function4())]
	print(result)
	return result

#need to redo

#finding factors for a number
def function6(num):
    result = []
    if x for range(101):
        if x != 0 and x != 1 and x not in function5()
            result.append(x)
    print(result)
	result = [x for x in range(num) if (x != 0 and x != 1 and x not in function5())]
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

function1()
function2()
function3()
function4()
function5()
function6(100)
function7([[1,2,3],[4,5,6],[7,8,9]])
