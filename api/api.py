from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/b2s/{b}")
def getbit2s(b:str):
    s = int(b[0])
    e = int(b[1:9], 2)
    f = [ int(x) for x in b[9:] ]
    x = 1 + sum([ int(f[i])*2**(-(i+1)) for i in range(len(f)) ])
    return {"pass": (-1)**s * 2**(e-127) * x }

@app.post("/b2s")
def psotbit2s(bitstring):
    b = bitstring
    s = int(b[0])
    e = int(b[1:9], 2)
    f = [ int(x) for x in b[9:] ]
    x = 1 + sum([ int(f[i])*2**(-(i+1)) for i in range(len(f)) ])
    return {"คําตอบคือ": (-1)**s * 2**(e-127) * x }