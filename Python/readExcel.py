import pandas as pd
import numpy
import math
#inputFileName = input("Enter the name of input file: ")

#check file if empty
df1 = pd.read_csv('test2.txt' ,sep='|',low_memory=False)
if(df1.empty):
    print('file is empty')
else:
    print('Validating File .....')
    
#validate route id
df2 = df1[df1['Route ID'].apply(lambda x: len(str(x)) > 3)]
if(df2.empty == False):
    print('Data issue in Route ID')
    print(df2)

#validate street type
df3 = df1[df1['Street Type'].apply(lambda x: len(str(x)) > 5)]
if(df3.empty == False):
    print('Data issue in Street Type')
    print(df3)

#validate Delivery Segment ID
df4 = df1['Delivery Segment ID']
df5 =df4.fillna("0")
index = 0
for x in df5.items():
        try:  
            index +=1
            str(index) 
            str(int(x[1]))     
        except:
         print('Data issue in Delivery Segment ID')
         print(str(index)  +' : Data issue in line ' + str(index) +' : invalid data: '+ x[1])





