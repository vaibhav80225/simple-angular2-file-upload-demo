import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    @Input() multiple: boolean = false;
    @ViewChild('fileInput') inputEl: ElementRef;
    //here you can also access form field by name attribute
    @ViewChild('name') inputEt: ElementRef;

    constructor(private http: Http) { }

    uploadFile() {
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let inputEt: HTMLInputElement = this.inputEt.nativeElement;
        let fileCount: number = inputEl.files.length;

        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file[]', inputEl.files.item(i));
            }
            //console.log(inputEt.value);
            formData.append('name', inputEt.value);
           //Here You can put your server url which is handle this request
            this.http.post('http://localhost:8080/file-upload', formData).subscribe();
            // do whatever you do...
            // subscribe to observable to listen for response
        }
    }
}
