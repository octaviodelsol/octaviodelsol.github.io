import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'octaviodelsol.github.io';

  goToSheet() {
    window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSf8y7aCGe-gqYWPe6uraqChu0Nu_o5E7MsZzGY0TEWvvYTelA/viewform?usp=pp_url';
  }
}
