# Fast Api App

## requirements

```sh
python3 -m pip install -r requirements.txt
```

## run

```sh
uvicorn api:app 
uvicorn api:app --reload
```

## code

```python
from fastapi import FastAPI
from pydantic import BaseModel
#from nameko.rpc import rpc
#from nameko.standalone.rpc import ClusterRpcProxy

class Student(BaseModel):
    firstname:str
    lastname:str
    email:str

app = FastAPI() # FlaskApp()

@app.get("/")
def hello():
    return {"Hello": "World"}

@app.get("/b2i")
def bit2int():
    return {"Result": i