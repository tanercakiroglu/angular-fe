import { OnInit, Component, Input } from "@angular/core";



@Component({
    selector: 'table-component',
    templateUrl: './table.html',
    providers: []
})
export class TableComponent implements OnInit {
    
    @Input() ColumnHeaders: String[];
    @Input() table: any;
    

    constructor() {
             
    }
    ngOnInit(): void {
        console.log(this.ColumnHeaders);
        console.log(this.table);
    }

}