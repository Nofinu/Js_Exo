export default class ImageItem {
    constructor(_imageUrl, _imageTitle, _imageDescription = "") {
        this._imageUrl = _imageUrl;
        this._imageTitle = _imageTitle;
        this._imageDescription = _imageDescription;
        this._id = ++ImageItem._count;
    }
    get getUrl() {
        return this._imageUrl;
    }
    get Description() {
        return this._imageDescription;
    }
    get getTitle() {
        return this._imageTitle;
    }
    get getId() {
        return this._id;
    }
}
ImageItem._count = 0;
