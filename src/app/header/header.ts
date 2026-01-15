import { Component } from '@angular/core';
import { Nav } from "./nav/nav";

@Component({
  selector: 'app-header',
  imports: [Nav],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  standalone: true
})
export class Header {

}
