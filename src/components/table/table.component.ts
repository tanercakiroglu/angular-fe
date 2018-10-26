import { OnInit, Component, Input, Output,EventEmitter } from "@angular/core";




@Component({
    selector: 'table-component',
    templateUrl: './table.html',
    providers: []
})
export class TableComponent implements OnInit {
    
    @Input()  ColumnHeaders: String[];
    @Input()  table: any;
    @Output() rowClicked = new EventEmitter();

    constructor() {
             
    }
    ngOnInit(): void {
        console.log(this.ColumnHeaders);
        console.log(this.table);
    }

    rowClick(row):void{
        
        this.rowClicked.emit(row);
    }
}