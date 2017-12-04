import { MdPaginator } from '@angular/material';
import { MotelService } from './../../services/motel/motel.service';
import { Observable } from 'rxjs/Observable';
import { CollectionViewer } from '@angular/cdk/collections/typings';
import { DataSource } from "@angular/cdk/collections";
import { Motel } from "../../models/motel.models";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class UserMotelDataSource extends DataSource<Motel>{
    _filterChange = new BehaviorSubject('');

    constructor(private motelService: MotelService, private paginator: MdPaginator, private username: string) {
        super();
        this.motelService.getDataByUsernameByPageAndKeyWord(this.paginator.pageIndex, "");
    }
    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    connect(): Observable<Motel[]> {
        const displayDataChanges = [
            this._filterChange,
            this.paginator.page,
            this.motelService.dataChange
        ];
        return Observable.merge(...displayDataChanges).map(() => {
            return this.motelService.data.slice().filter((item: Motel) => {
                const searchStr = (item.address + item.title).toLowerCase();
                return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
            });
        });
    }
    disconnect(collectionViewer: CollectionViewer): void {
    }

}