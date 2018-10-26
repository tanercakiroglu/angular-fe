import { Component, OnInit } from "@angular/core";




@Component({
    selector: 'home-component',
    templateUrl: './home.html',
    providers: []

})
export class HomeComponent implements OnInit {
    table: any;
    ColumnHeaders: String[];
    
    constructor(){
        this.ColumnHeaders=['Name','Surname','Age','Detail','Detail Name','Detail Surname'];
        this.table = [
            { Name: "John", Surname: "Figgins", Age: "20", Detail: "Person details: John Figgins, 20 years, accounter",'Detail Name': "First name:  John", 'Detail Surname': "Last name: Figgins" },
            { Name: "Taner",Surname: "Çakıroğlu", Age: "20", Detail: "Person details: John Figgins, 20 years, accounter", 'Detail Name': "First name:  John", 'Detail Surname': "Last name: Figgins" }
            //... add your items here
        ];
    }
    ngOnInit(): void {
        
       
    }


}