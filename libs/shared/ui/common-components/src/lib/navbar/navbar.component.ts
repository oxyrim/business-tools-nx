import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'bt-libs-ui-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  private _navItems: NavbarItem[] = [];
  @Input()
  set navbarItems (value: NavbarItem[]) {
    this._navItems = [{label: 'home', route: '/'}, ...value];
  }
  get navbarItems(): NavbarItem[] {
    return this._navItems;
  }
}

export interface NavbarItem {
  label: string;
  route: string;
}
