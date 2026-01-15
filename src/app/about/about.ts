import { Component } from '@angular/core';
import { AbtResponsiblites } from "./abt-responsiblites/abt-responsiblites";
import { AbtApproach } from "./abt-approach/abt-approach";
import { Members } from "./members/members";

@Component({
  selector: 'app-about',
  imports: [AbtResponsiblites, AbtApproach, Members],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  standalone: true
})
export class About {

 
}
