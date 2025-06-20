import { NgClass } from '@angular/common';
import { Component, input, OnChanges, OnInit, output, signal } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class Pagination implements OnInit, OnChanges {
  totalPages = signal<number[]>([]);
  currentPage = signal<number>(1);

  pages = input<number>(1);
  selectedPage = output<number>();

  constructor() {
  }

  ngOnInit(): void {
    this.initializeTotalPages();
  }

  ngOnChanges() {
    this.initializeTotalPages();
  }

  initializeTotalPages() {
    let pageArray = Array.from({ length: this.pages() }, (_, i) => i + 1);
    this.totalPages.set(pageArray);
  }

  selectPage(indexPage: number) {
    let newIndex = ++indexPage;

    // emitir nuevo evento (nueva página seleccionada) al padre
    this.selectedPage.emit(newIndex);

    // seteamos la señal para mostrar por pantalla
    this.currentPage.set(indexPage);
  }
}

