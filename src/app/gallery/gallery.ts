import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  standalone: true
})
export class Gallery {
  public images = ['scoolNav.jpg','nav-1.png','nav-2.png','nav-3.png','nav-4.png','nav-5.png']
}
