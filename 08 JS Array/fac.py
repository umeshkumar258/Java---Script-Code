num = int(input("Enter the number: "))

fac = 1


for index in range(1,num+1):
    
    fac = index * (fac)
    
    
print(fac)