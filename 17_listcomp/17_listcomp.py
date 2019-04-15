#Jiajie Mai
#SoftDev2 pd6
#K#17--PPFTLCW
#2019-04-15

def function1(list):
    result = []
    for x in range(5):
        result.append(str(22 * x))
    print(result)
	result = [str(22 * x)for x in range(5)]
	print(result)
	return result

def function2(list):
    result = []
    for x in range(5):
        result.append(7 + 10 * x)
    print(result)
	result = [7 + 10 * x for x in rang(5)]
	print(result)
	return result

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

def function4():
    result = []
    for x in range(101):
        for y in range(x):
            if (y != 0 and y != 1 and y != x and x % y == 0)
                result.append(x)
	print (result)
	result = [x for x in range(101) for y in range(x) if (y != 0 and y != 1 and y != x and x % y == 0)]
	print(result)
	return result

def function5():
    result = []
    for x in range(101):
        for y in range(x):
            if (y != 0 and y != 1 and y != x and x % y == 0)
	print (result)
	result = [x for x in range(101) for y in range(x) if (y != 0 and y != 1 and y != x and x % y == 0)]
	print(result)
	return result

def function6(num):
    result = []
    if x for range(101):
        if x != 0 and x != 1 and x not in function5()
            result.append(x)
    print(result)
	result = [x for x in range(num) if (x != 0 and x != 1 and x not in function5())]
	print(result)

#need to fix
def function7(matrix):
    result = []
    for x in range(len(matrix)):
        for y in range(len(matrix[x])):
            result[y][x] = matrix[x][y]
    print(result)
	result = []
	print(result)

function1()
function2()
function3()
function4()
function5()
function6(100)
function7([[1,2,3],[4,5,6],[7,8,9]])
