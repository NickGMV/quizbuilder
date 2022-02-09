
import pandas as pd
#import os
#import shutil
#import openpyxl
from datetime import datetime


url = './quiz questions.xlsx'

qs = pd.read_excel(url,)
qs.head()
qs.fillna('na' ,inplace = True)
qs['incorrect'] = 'x'
#qs['index']='y'
qs.head()



qs['index2'] = range(1,len(qs)+1)
#qs.head()
qs.dtypes
qs['index2'] = qs['index2'].apply(lambda x: f'Q{x}')

qs.set_index('index2',inplace=True)
qs.head()

for index, row in qs.iterrows():
    incorrect=[]
    incorrect = [x for x in row[2:-2] if x!='na']
    row['incorrect'] = incorrect
    print(incorrect)
qs.head()

qs.drop(columns = ['incorrect1','incorrect2','incorrect3','incorrect4'], inplace = True)

json = qs.to_json(orient="index")

with open("quiz2.js",'w') as e:
    e.write('var questions = `')
    e.write(f'{json}')
    e.write('`')