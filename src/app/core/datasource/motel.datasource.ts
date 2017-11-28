import { MotelService } from './../services/motel/motel.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { Motel } from '../models/motel.models';
import { MdPaginator } from '@angular/material';

export class MotelDataSource extends DataSource<Motel>{
    _filterChange = new BehaviorSubject('');

    constructor(private motelService: MotelService, private paginator: MdPaginator) {
        super();
        this.motelService.addUser(this.paginator.pageIndex);
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

    disconnect(): void {
    }

}