import json

with open("char-info/data.json", "r") as file:
    data = json.load(file)  # Load JSON from file
# print(data)

limited_students = ["ako (dress)", "aru (new year)","aru (dress)", "azusa (swimsuit)"]
fest_students = [
    "hanako (swimsuit)",
    "hina (dress)",
    "hoshino (battle)",
    "hoshino (swimsuit)",
    "mika",
    "neru (school uniform)",
    "rio",
    "shiroko terror",
    "wakamo"]

warfare_students = [
    "airi (band)",
    "atsuko (swimsuit)",
    "ayane (swimsuit)",
    "fubuki",
    "hasumi (sportswear)",
    "hibiki (cheerleader)",
    "ibuki",
    "izumi (swimsuit)",
    "junko (new year)",
    "kirino (swimsuit)",
    "koharu (swimsuit)",
    "michiru",
    "mine (idol)",
    "miyu (swimsuit)",
    "nodoka",
    "saten ruiko",
    "shizuko (swimsuit)",
    "tomoe",
    "tsurugi (swimsuit)",
    "yuzu (maid)",
    "nonomi"
]

gachaType= [
    "limited",
    "fest",
    "warfare",
    "event"
]

for student in data["students"]:
    if student["name"] in limited_students:
        student["gacha"] = gachaType[0]
    elif student["name"] in fest_students:
        student["gacha"] = gachaType[1]
    elif student["name"] in warfare_students:
        student["gacha"] = gachaType[2]
    elif student["name"] == "nonomi":
        student["gacha"] = gachaType[3]
    else:
        student["gacha"] = ""
        


print(json.dumps(data, indent=4))

with open("char-info/data.json", "w") as file:
    json.dump(data, file, indent=4)