
import pandas as pd
import os
#import shutil
#import openpyxl
from datetime import datetime
import mdtex2html
import numpy as np

## added to convert to html
def convert(x):
    y = f'{x}'
    #print(y)
    #eval('x = "{x}"')
    z = mdtex2html.convert(y)
    z = z.replace('"',"'")
    #print(z)
    return z

def quote_clean(x):
    x = x.replace("'","&#39")
    return x




url = './quiz questions.xlsx'
options = pd.read_excel(url,'options')
options.set_index('Options', inplace = True)
qs = pd.read_excel(url,'questions')
qs.head()
qs.fillna('na' ,inplace = True)
qs['incorrect'] = 'x'
#qs['index']='y'
qs.head()

qs.applymap(quote_clean)

qs['index2'] = range(1,len(qs)+1)
#qs.head()
qs.dtypes
qs['index2'] = qs['index2'].apply(lambda x: f'Q{x}')

qs.set_index('index2',inplace=True)
qs.head()

for index, row in qs.iterrows():
    incorrect=[]
    #incorrect = ['<p>' + x + '</p>' for x in row[2:-3] if x!='na']
    incorrect = ['<p>' + x + '</p>' for x in row[2:-3] if x!='na']
    #incorrect = [convert(x) for x in row[2:-3] if x!='na']
    row['incorrect'] = incorrect
    print(incorrect)
qs.head()

qs.drop(columns = ['incorrect1','incorrect2','incorrect3','incorrect4'], inplace = True)

# turn equations to text?
qs['Correctanswer'] = qs['Correctanswer'].apply(lambda x: f'<p> {x} </p>')
#qs['Question'] = qs['Question'].apply(convert)
##qs['Correctanswer'] = qs['Correctanswer'].apply(bracklean)
#qs['Question'] = qs['Question'].apply(bracklean)


json = qs.to_json(orient="index")
json2 = options.to_json()

#print(json)
with open("quiz2.js",'w') as e:
    e.write('var questions = `')
    json = json.replace('$','\$')
    #json = json.replace('*','\\times')
    e.write(f'{json}')
    e.write('`\n\n')
    e.write('var options = `')
    e.write(f'{json2}')
    e.write('`\n\n')