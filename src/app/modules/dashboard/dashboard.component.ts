import { Component } from '@angular/core';
import { SidebarMenuComponent } from '../../components/sidebar-menu/sidebar-menu.component';
import { RouterOutlet } from '@angular/router';
import { IconsModule } from '../../icons.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidebarMenuComponent, RouterOutlet, IconsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
