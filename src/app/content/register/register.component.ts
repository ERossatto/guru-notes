// Angular
import { Component, OnInit } from '@angular/core';

// Services
import { LanguageService } from 'app/services/language.service';

// Helpers
import { Texts } from '@texts';

@Component({
  selector: 'content-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  public texts = Texts.RegisterComponent;

  constructor(
    public languageService: LanguageService,
  ) { }

  ngOnInit(): void { }
}
