// entries.component.ts
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-entries',
    templateUrl: './entries.component.html',
    styleUrls: ['./entries.component.css']
})
export class EntriesComponent {


    entries: any;

    constructor(private http: HttpClient) {}
    ngOnInit() {
      this.getEntries();
  }

    getEntries() {
        this.http.get('http://localhost:3000/get-entries')
            .subscribe((data: any) => {  
                this.entries = data;
            });
    }
}
