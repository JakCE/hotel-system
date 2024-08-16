import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IconsModule } from '../../icons.module';

@Component({
  selector: 'app-sidebar-config',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, IconsModule],
  templateUrl: './sidebar-config.component.html',
  styleUrl: './sidebar-config.component.css'
})
export class SidebarConfigComponent {

}
