 # Jiajie Mai
 # SoftDev2 pd6
 # K#21--Onions, Bell Peppers, and Celery, Oh My!  J
 # 2019-04-30

def make_counter():
    x = 0
    def call():
        nonlocal x
        x += 1
        print (x)
        return x
    return call

ctrl1 = make_counter()
ctrl1()
print(" -> 1")
ctrl1()
print(" -> 2")

ctrl2 = make_counter()
ctrl2()
print(" -> 1")
ctrl1()
print(" -> 3")
ctrl2()
print(" -> 2")
