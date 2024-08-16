import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconsModule } from '../../icons.module';

@Component({
  selector: 'app-sidebar-menu',
  standalone: true,
  imports: [NgIf, NgClass, RouterLink, RouterLinkActive, IconsModule],
  templateUrl: './sidebar-menu.component.html',
  styleUrl: './sidebar-menu.component.css'
})
export class SidebarMenuComponent {
  isOpen = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
