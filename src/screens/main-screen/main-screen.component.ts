import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { ButtonComponent } from "../../components/button/button.component";
import { ActiveFilterComponent } from "../../components/active-filter/active-filter.component";

@Component({
  selector: 'app-main-screen',
  imports: [TitleComponent, ButtonComponent, ActiveFilterComponent],
  templateUrl: './main-screen.component.html',
  styleUrl: './main-screen.component.css',
  standalone: true,
})
export class MainScreenComponent implements OnInit, OnDestroy {
  showInactive = signal<boolean>(false);
  showExternals = signal<boolean>(false);

  constructor() {
    // inicializar las variables
    // inject --> inyectar los servicios (por ejemplo, API CHRONOS)
  }

  ngOnInit(): void {
    // mostrar un loading
    // llamar a nuestra API por HTTP
  }

  ngOnDestroy(): void {
    // unsubscribe de un observable
  }

  showMore() {
    console.log("Show more!");
  }
  explore() {
    console.log("Explore!");
  }
  configure() {
    console.log("Configure!");
  }

  showInactiveUsers(value: boolean) {
    this.showInactive.set(value);
  }

  showExternalUsers(value: boolean) {
    this.showExternals.set(value);
  }
}
