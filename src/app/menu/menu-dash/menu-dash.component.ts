// Angular
import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

// Services
import { LanguageService } from 'app/services/language.service';

// Helpers
import { Texts } from '@texts';

@Component({
  selector: 'menu-dash',
  templateUrl: './menu-dash.component.html',
  styleUrls: ['./menu-dash.component.scss']
})
export class MenuDashComponent implements OnInit {

  @Input() toggle: boolean = false;
  @Output() onClose: EventEmitter<void> = new EventEmitter();

  public texts = Texts.MenuDashComponent;

  constructor(
    public languageService: LanguageService,
  ) { }

  ngOnInit(): void { }

  private _collapseMenu(): void {
    this.toggle = false;
    this.onClose.emit();
  }

  public handleOption(): void {
    this._collapseMenu();
  }
}
