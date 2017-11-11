
export class Motel {

    private _id: number;
    private _title: string;
    private _description: string;
    private _price: number;
    private _city: string;
    private _ward: string;
    private _street: string;
    private _address: string;
    private _latitude: string;
    private _longitude: string;
    private _available: string;

    constructor(id?: number, title?: string, description?: string, price?: number, city?: string, ward?: string, street?: string,
        address?: string, latitude?: string, longitude?: string, available?: string) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._price = price;
        this._city = city;
        this._ward = ward;
        this._street = street;
        this._address = address;
        this._latitude = latitude;
        this._longitude = longitude;
        this._available = available;
    }

    get id(): number {
        return this._id;
    }
    set id(id: number) {
        this._id = id;
    }
    get title(): string {
        return this._title;
    }
    set title(title: string) {
        this._title = title;
    }

    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }
    get price(): number {
        return this._price;
    }
    set price(price: number) {
        this._price = price;
    }
    get city(): string {
        return this._city;
    }
    set city(city: string) {
        this._city = city;
    }
    get ward(): string {
        return this._ward;
    }
    set ward(ward: string) {
        this._ward = ward;
    }
    get street(): string {
        return this._street;
    }
    set street(street: string) {
        this._street = street;
    }
    get address(): string {
        return this._address;
    }
    set address(address: string) {
        this._address = address;
    }
    get latitude(): string {
        return this._latitude;
    }
    set latitude(latitude: string) {
        this._latitude = latitude;
    }
    get longitude(): string {
        return this._available;
    }
    set longitude(longitude: string) {
        this._longitude = longitude;
    }
    get available(): string {
        return this._available;
    }
    set available(available: string) {
        this._available = available;
    }


}
