import { NgModule } from '@angular/core';
import { LucideAngularModule, House, Bolt, Minus, ChartSpline, ShoppingCart, Hotel, UserRoundCog, BedDouble, Sparkles, Brush, Save, ChevronRight, ChevronLeft } from 'lucide-angular';

@NgModule({
  imports: [LucideAngularModule.pick({ 
    House, 
    Bolt, 
    Minus, 
    ChartSpline, 
    ShoppingCart,
    Hotel,
    UserRoundCog,
    BedDouble,
    Sparkles,
    Brush,
    Save,
    ChevronRight,
    ChevronLeft
  })],
  exports: [LucideAngularModule],
})
export class IconsModule {}