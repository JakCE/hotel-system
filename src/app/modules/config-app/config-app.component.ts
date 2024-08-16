import { Component } from '@angular/core';
import { SidebarConfigComponent } from '../../components/sidebar-config/sidebar-config.component';
import { RouterOutlet } from '@angular/router';
import { IconsModule } from '../../icons.module';

@Component({
  selector: 'app-config-app',
  standalone: true,
  imports: [SidebarConfigComponent, RouterOutlet, IconsModule],
  templateUrl: './config-app.component.html',
  styleUrl: './config-app.component.css'
})
export class ConfigAppComponent {

}
