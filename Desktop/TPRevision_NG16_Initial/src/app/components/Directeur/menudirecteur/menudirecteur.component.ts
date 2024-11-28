import { Component, } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-menudirecteur',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './menudirecteur.component.html',
  styleUrls: ['./menudirecteur.component.css']
})
export class MenudirecteurComponent {


}
