#Sets - unordered collection of unique values
#Create empty set

s = set()

#Add elements to set
#No element appeare twice in a set
s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(3)
print(s)

#Remove elements from a set
s.remove(2)
print(s)

#Len
print(f"The set has {len(s)} number of elements")