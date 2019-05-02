print("")

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print("Testing Fibonacci")
i = randint(1,20)
print(fib(i))
print("Fibonacci number for " + str(i))

del fib

def memoize(f):
    memo = {}
    def helper(*args):
        if args not in memo:
            memo[args] = f(*args)
        return memo[args]
    return helper

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print("\nNow doing the same thing but with a memoizing\n")
fib = memoize(fib)
print(fib(i))
