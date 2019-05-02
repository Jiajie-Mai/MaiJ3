import random
from random import randint

def make_HTML_heading(f):
    txt = f()
    def inner():
        return '<h1>' + txt + '<h1>'
    return inner

def greet():
    greetings = ['Hello','Welcome','AYO!','Hola','Bonjour','Word up']
    return random.choice(greetings)

print("\nTesting greeting")
greetings = make_HTML_heading(greet)
print(greetings())

del greet
print("\nNow doing the same thing but with a decorator\n")

# equiv to greet = make_HTML_heading(greet)
@make_HTML_heading
def greet():
    greetings = ['Hello','Welcome','AYO!','Hola','Bonjour','Word up']
    return random.choice(greetings)

print(greet())
print("")

def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print("Testing Fibonacci")
i = randint(20,40)
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

@memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print("\nNow doing the same thing but with a memoizing\n")
print(fib(i))


# *args
# Used as a placeholder for function parameters within other functions    
