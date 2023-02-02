class Contact {
  private static _count = 0
  private _id:number
  constructor(private _lastename:string,private _firstname:string,private _age:number,private _email:string,private _telephoneNumber:string){
    this._id=++Contact._count
  }
  get info():[string,string,number,string,string]{
    return[this._lastename,this._firstname,this._age,this._email,this._telephoneNumber]
  }
  get names():[string,string]{
    return[this._lastename,this._firstname,]
  }
  set setInfo (tab:[string,string,number,string,string]){
    this._lastename = tab[0]
    this._firstname = tab[1]
    this._age = tab[2]
    this._email = tab[3]
    this._telephoneNumber = tab[4]
  }
}

export {Contact}