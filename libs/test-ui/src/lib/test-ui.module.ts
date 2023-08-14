import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestButtonComponent } from './test-button/test-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TestButtonComponent],
  exports: [TestButtonComponent],
})
export class TestUiModule {}
