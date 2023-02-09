import pandas as pd
import numpy
import math
#inputFileName = input("Enter the name of input file: ")

#check file if empty
df1 = pd.read_csv('test1.txt' ,sep='|',low_memory=False)
if(df1.empty):
    print('file is empty')
else:
    print('Validating File .....')


#print(list(df1.columns.values.tolist()))


# print(df1)
# select row  by index
# print(df1.iloc[1:3])


#select column by label
#df2 = df1.loc[:,['Delivery Segment ID']]
# df2 = df1[['Route ID']]
# print(df2)

#query rows
postalCode='7E1'
df3 = df1.query('`Route ID` != @postalCode')
df4= df3.dropna(subset=['Delivery Segment ID'])
print(df4)


df5 = df4.dropna(axis='columns')
print(df5)