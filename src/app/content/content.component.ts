import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  listMon = [{
      "Id": "ADAV",
      "Name": "Lập trình Android nâng cao",
      "Logo": "ADAV.jpg"
    },
    {
      "Id": "ADBS",
      "Name": "Lập trình Android cơ bản",
      "Logo": "ADBS.jpg"
    },
    {
      "Id": "ADTE",
      "Name": "Kiểm thử và triển khai ứng dụng Android",
      "Logo": "ADTE.jpg"
    },
    {
      "Id": "ADUI",
      "Name": "Thiết kế giao diện trên Android",
      "Logo": "ADUI.jpg"
    },
    {
      "Id": "ASNE",
      "Name": "Lập trình ASP.NET",
      "Logo": "ASNE.png"
    },
    {
      "Id": "CLCO",
      "Name": "Điện toán đám mây",
      "Logo": "CLCO.jpg"
    },
    {
      "Id": "DBAV",
      "Name": "SQL Server",
      "Logo": "DBAV.png"
    },
    {
      "Id": "DBBS",
      "Name": "Cơ sở dữ liệu",
      "Logo": "DBBS.png"
    },
    {
      "Id": "GAME",
      "Name": "Lập trình game 2D",
      "Logo": "GAME.png"
    }
  ];
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
  curPage: Number = 1;
  constructor() {}

  ngOnInit() {}

}
