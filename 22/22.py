def make_counter():
    x = 1
    def inner():
        nonlocal x
        x += 1
        return x
    inner()
    return x

ctrl1 = make_counter()
ctrl1()

ctrl1()

ctr2 = make_counter()
ctrl2()

ctrl1()

ctrl2()
