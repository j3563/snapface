import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
     {
        id: 1,
        title: 'CANARD',
        description: 'Ceci est un canard',
        imageUrl: 'https://th.bing.com/th/id/OIP.xhhPcS2KleB8cFnl17NdpgHaFc?pid=ImgDet&rs=1',
        createdDate: new Date(),
        snaps: 2635
      },
      {
        id: 2,
        title: 'SURICATE',
        description: 'Moi',
        imageUrl: 'https://th.bing.com/th/id/OIP.mymANAZJvaU0x3Swqe0PiwHaE3?w=290&h=190&c=7&r=0&o=5&pid=1.7',
        createdDate: new Date(),
        snaps: 98
      },
      {
        id: 3,
        title: 'BANANE',
        description: 'Le fruit suprême',
        imageUrl: "https://th.bing.com/th/id/R.8360829a408d8c8005f0d576a1ee3740?rik=p2xmB72HaOE7rw&pid=ImgRaw&r=0",
        createdDate: new Date(),
        snaps: 9999,
        location: 'Saint-Floris'
      },
      {
       id: 4,
       title: 'FROMAGE',
       description: 'Un très bon fromage',
       imageUrl: "https://www.fromages-du-mezard.com/wp-content/uploads/2020/07/fromages-du-mezard-fromage.jpg",
       createdDate: new Date(),
       snaps: 231,
       location: 'Aussois'
      },
      {
       id: 5,
       title: 'Soirée disco',
       description: 'La folie chez Boris',
       imageUrl: "https://th.bing.com/th/id/OIP.wxm80_2Cpv_8cwFg3BdDSAHaD4?w=305&h=180&c=7&r=0&o=5&pid=1.7",
       createdDate: new Date(),
       snaps: 628,
      }
    ];  
   
    getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if (!faceSnap) {
        throw new Error('FaceSnap not found');
      } else {
        return faceSnap;
      }
    }
    
    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }
  }
