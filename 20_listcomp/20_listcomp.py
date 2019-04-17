moby = []

with open('Moby Dick.txt','r') as f:
    for line in f:
        for word in line.split():
            moby.extend(word)

print(moby)
