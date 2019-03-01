#Jiajie mai
#SoftDev2 pd6
#K06 -- Yummy Mongo Py
#2019-03-01  

def sort_by_bourogh(borough):
    output = []
    found = collection.find({"borough":borough})
    for i in found:
        output.append(i)
    return output
    
def sort_by_zip(zcode):
    output = []
    found = collection.find({"address.zipcode":zcode})
    for i in found:
        output.append(i)
    return output

def sort_by_zip_grade(zcode, score):
    output = []
    found = collection.find({"$and": [{"address.zipcode":zcode} , {"grades,score":score}]})
    for i in found:
        output.append(i)
    return output

def sort_by_zip_scoreBelow(zcode, score):
    output = []
    found = collection.find({"$and": [{"address.zipcode":zcode} , {"$lte":{"grades,score":score}}]})
    for i in found:
        output.append(i)
    return output

def sort_by_zip_score_and_gradeAbove(zcode, score, grade)
    output = []
    found = collection.find({"$and": [{"address.zipcode":zcode} , {"$gte":{"grades,score":score}}, {"grades,score":score}]})
    for i in found:
        output.append(i)
    return output

print("Doing first 10 resturants in Brooklyn:")
result = sort_by_bourogh("Brooklyn")
for i in range(10):
    print(result[i]['name'])
print("")

print("Doing first 10 resturants with a zip code of 11209:")
result = sort_by_zip("11209")
for i in range(10):
    print(result[i]['name'])
print("")

print("Doing first 10 resturants with a zip code of 11209 and grade A:")
result = sort_by_zip_grade("11209","A")
for i in range(10):
    print(result[i]['name'])
print("")

print("Doing first 10 resturants with a zip code of 11209 and a score of <= 5:")
result = sort_by_zip_scoreBelow("11209","5")
for i in range(10):
    print(result[i]['name'])
print("")

print("Doing first 10 resturants with a zip code of 11209, a score of <= 5, and grade of A:")
result = sort_by_zip_grade_scoreAbove("11209","5","A")
for i in range(10):
    print(result[i]['name'])
print("")
