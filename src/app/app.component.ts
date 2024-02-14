import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  standalone: true,
  imports: [RouterModule, TranslateModule],
  selector: 'cake-bake-ang-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'cake-bake-ang';
  constructor(private translate: TranslateService) {
  }

  change() {
    this.translate.use('de'); 
  }

  revert() {
    this.translate.use('en');
  }
}
