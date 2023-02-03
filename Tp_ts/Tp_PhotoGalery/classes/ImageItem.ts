export default class ImageItem {
    private static _count: number = 0;
    private _id: number;

    constructor(private _imageUrl: string, private _imageTitle: string, private _imageDescription: string ="") {
    this._id = ++ImageItem._count;
    }
    get getUrl ():string{
        return this._imageUrl
    }
    
    get Description():string{
        return this._imageDescription
    }

    get getTitle ():string{
        return this._imageTitle
    }

    get getId ():number{
        return this._id
    }
}