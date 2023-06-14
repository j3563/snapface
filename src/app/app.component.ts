import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']}
)
export class AppComponent implements OnInit {
 
  faceSnaps!: FaceSnap[];
  
  ngOnInit() {
    this.faceSnaps = [{
      title: 'CANARD',
      description: 'Ceci est un canard',
      imageUrl: 'https://th.bing.com/th/id/OIP.xhhPcS2KleB8cFnl17NdpgHaFc?pid=ImgDet&rs=1',
      createdDate: new Date(),
      snaps: 2635
    },
    {
      title: 'SURICATE',
      description: 'Ceci est probablement un suricate',
      imageUrl: 'https://th.bing.com/th/id/OIP.wK99jo47ZrPSyOo_QL0tagHaHa?w=192&h=193&c=7&r=0&o=5&pid=1.7',
      createdDate: new Date(),
      snaps: 98
    },
    {
      title: 'SAINT FLORIS',
      description: 'Sans doute le meilleur village',
      imageUrl: 'https://www.communes.com/images/orig/nord-pas-de-calais/pas-de-calais/saint-floris_62350/saint-floris_191705.jpg',
      createdDate: new Date(),
      snaps: 99999,
      location: 'Saint-Floris'
    },
  ];
  }
}