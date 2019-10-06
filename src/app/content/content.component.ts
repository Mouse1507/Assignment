import {
  Component,
  OnInit
} from '@angular/core';
import {
  MainServiceService
} from '../main-service.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(private mainSer: MainServiceService) {}
  carousel = [{
      name: "",
      image: "banner-1.jpg",
    },
    {
      name: "",
      image: "banner-2.jpg",
    },
    {
      name: "",
      image: "banner-3.jpg",
    },
  ]
  listMon : any;
  curPage: Number = 1;
  ngOnInit() {
    this.listMon = this.mainSer.listMon;
  }

}
