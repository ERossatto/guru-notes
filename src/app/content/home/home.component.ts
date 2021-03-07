// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { LanguageService } from 'app/services/language.service';

// Helpers
import { Texts } from '@texts';

@Component({
  selector: 'content-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public texts = Texts.HomeComponent;

  constructor(
    public languageService: LanguageService,
  ) { }

  ngOnInit(): void { }
}
