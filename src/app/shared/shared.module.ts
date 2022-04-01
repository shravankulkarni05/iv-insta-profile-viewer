import { NgModule } from '@angular/core';
import { IvFooterComponent } from './iv-footer/iv-footer.component';
import { IvHeaderComponent } from './iv-header/iv-header.component';
import { ImageLoaderDirective } from './directives/image-loader.directive';

@NgModule({
  declarations: [IvHeaderComponent, IvFooterComponent, ImageLoaderDirective],
  exports: [IvHeaderComponent, IvFooterComponent, ImageLoaderDirective],
})
export class SharedModule {}
