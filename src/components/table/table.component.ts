import { OnInit, Component, Input, Output,EventEmitter } from "@angular/core";




@Component({
    selector: 'table-component',
    templateUrl: './table.html',
    providers: []
})
export class TableComponent implements OnInit {
    
    ColumnHeaders: String[];
    @Input()  table: any;
    @Output() rowClicked = new EventEmitter();
    
    constructor() {
    }
    ngOnInit(): void {
        if(this.table!=null && this.table!=undefined && this.table.length>0)
            this.ColumnHeaders=Object.keys(this.table[0]);
        console.log(this.ColumnHeaders);
        console.log(this.table);
    }

    rowClick(row):void{
        this.rowClicked.emit(row);
    }
}