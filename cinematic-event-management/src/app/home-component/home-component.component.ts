// home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponent {
  // Add your movie poster URLs here
  moviePosters: string[] = [
    'https://assets-prd.ignimgs.com/2022/07/21/oppenheimer-poster-1658411601593.jpeg',
    'https://upload.wikimedia.org/wikipedia/en/thumb/d/dc/Kabir_Singh.jpg/220px-Kabir_Singh.jpg',
    'https://s3.amazonaws.com/nightjarprod/content/uploads/sites/130/2021/08/19085635/gEU2QniE6E77NI6lCU6MxlNBvIx-scaled.jpg',
    'https://c8.alamy.com/comp/R59HEX/mission-impossible-original-movie-poster-R59HEX.jpg',
    'https://i.pinimg.com/736x/91/1a/2d/911a2db55ff3a1faa44a7e766b9a1b3e.jpg',
    // 'url_to_poster3.jpg',
    // Add more poster URLs as needed
  ];
}
