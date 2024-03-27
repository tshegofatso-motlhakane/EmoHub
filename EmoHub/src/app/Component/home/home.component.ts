import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slides: string[] = [
    'assets/hero-slider/image-1.jpg',
    'assets/hero-slider/image-2.jpg',
    'assets/hero-slider/image-3.jpg',
    'assets/hero-slider/image-4.jpg',
    'assets/hero-slider/image-5.jpg',
  ]
  currentSlide = 0;

  ngOnInit(): void {
    // Automatic slide change (you can customize the interval)
    setInterval(() => this.nextSlide(), 5000); // Change slide every 5 seconds
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
}
