import { Component, OnInit, ViewChildren } from "@angular/core";




@Component({
    selector: 'home-component',
    templateUrl: './home.html',
    providers: []

})
export class HomeComponent implements OnInit {
    table: any;
    ColumnHeaders: String[];


    constructor() {
        this.ColumnHeaders = ['Name', 'Surname', 'Age', 'Detail', ' ', '  '];
        this.table = [
            { Name: "John", Surname: "Figgins", Age: "20", Detail: "Person details: John Figgins, 20 years, accounter", ' ': "First name:  John", '  ': "Last name: Figgins" },
            { Name: "Taner", Surname: "Çakıroğlu", Age: "20", Detail: "Person details: John Figgins, 20 years, accounter", ' ': "First name:  John", '  ': "Last name: Figgins" }
            //... add your items here
        ];
    }
    ngOnInit(): void {


    }
    rowClicked(row): void {
        console.log(row);
    }




}