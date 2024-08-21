import { Component } from '@angular/core';
import { AppModule } from './app-module';

@Component({
  template: `<button>Do the thing</button>`,
  standalone: true,
})
export class TestEntryComponent { }

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'base-site';
}
