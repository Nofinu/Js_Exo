class Contact {
    constructor(_lastename, _firstname, _age, _email, _telephoneNumber) {
        this._lastename = _lastename;
        this._firstname = _firstname;
        this._age = _age;
        this._email = _email;
        this._telephoneNumber = _telephoneNumber;
        this._id = ++Contact._count;
    }
    get info() {
        return [this._lastename, this._firstname, this._age, this._email, this._telephoneNumber];
    }
    get names() {
        return [this._lastename, this._firstname,];
    }
    set setInfo(tab) {
        this._lastename = tab[0];
        this._firstname = tab[1];
        this._age = tab[2];
        this._email = tab[3];
        this._telephoneNumber = tab[4];
    }
}
Contact._count = 0;
export { Contact };
