'''
Jiajie Mai
SoftDev2 pd6
K07 -- Import/Export Bank
2019-03-05
'''

'''
Name- dadjokes.json
Description- A list of posts on Reddit from the /r/dadjokes subreddit 
Link- https://www.reddit.com/r/dadjokes.json
Import mechanism- I downloaded the file from reddit (the dadjokes subreddit), named it dadjokes.json, and then inserted it into our new collection after loading it.
'''

import pymongo, json

SERVER_ADDR="68.183.132.82"
connection=pymongo.MongoClient(SERVER_ADDR)
db = connection.jj
collection = db.dadjokes

def sort_by_post( number ):
    return collection.find({"children":number})

def sort_by_at_least_ups( amount ):
    return collection.find({"$gt":{'ups':amount}})

def sort_by_at_most_ups( amount ):
    return collection.find({"$lt":{'ups':amount}})

def sort_by_at_least_score( amount ):
    return collection.find({"$gt":{'score':amount}})

def sort_by_at_most_score( amount ):
    return collection.find({"$lt":{'score':amount}})
