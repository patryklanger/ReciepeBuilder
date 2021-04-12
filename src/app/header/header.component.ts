import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output() pageChange = new EventEmitter<string>();

  onSelect(pageName: string) {
    this.pageChange.emit(pageName);
  }
}
