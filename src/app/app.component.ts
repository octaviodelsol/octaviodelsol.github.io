import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'octaviodelsol.github.io';

  goToSheet() {
    window.location.href = 'https://docs.google.com/forms/d/1iE6H_ipPmq3RP1fiuRow6G6roI2WjtK9_wGfYRJJG_E/prefill';
  }
}
