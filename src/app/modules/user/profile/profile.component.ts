import { Component, OnInit } from '@angular/core';
import { MediaService } from '../../../shared/services/media.service';
import { MediaRequest } from '../../../shared/models/media-request.model';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  selectedFiles: FormData[] = [];
  fileList: File[] = [];

  constructor(private mediaService: MediaService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelected(event: Event) {
    let files = (event.target as HTMLInputElement).files;
    if (files) {
      for(var i = 0; i < files.length; i++) {
        let file = files.item(i);
        this.fileList.push(file);
        
        console.log(file);

        let formData = new FormData();
        formData.append(file.name, file);
        this.mediaService.postImageAsync(formData);
        //this.selectedFiles.push(formData);
      }
    }
  }

  uploadPhoto() {
    for (var i = 0; i < this.fileList.length; i++) {
      let file = this.fileList[i];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        let dataUrl = reader.result;
        console.log(dataUrl);
      }
      /*
      let request = new MediaRequest();
      request.fileName = file.name;
      this.mediaService.postImageAsync(this.fileList);
      */
    }
  }

}
