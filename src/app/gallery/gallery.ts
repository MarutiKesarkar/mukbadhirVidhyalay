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
  public images = ['nav-1.png','nav-2.png','nav-3.png','nav-4.png','nav-5.png',
    'nav-6.jpg','nav-7.jpg','nav-8.jpg','nav-9.jpg','nav-10.jpg','nav-11.jpg','nav-12.jpg',
    'nav-13.jpg','nav-14.jpg','nav-15.jpg','nav-16.jpg','nav-17.jpg','nav-18.jpg',
    'nav-20.jpg','nav-21.png']
}
