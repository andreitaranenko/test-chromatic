import { Component, Input } from '@angular/core';

@Component({
  selector: 'org-test-button',
  templateUrl: './test-button.component.html',
  styleUrls: ['./test-button.component.scss'],
})
export class TestButtonComponent {
  @Input() label: string = '';

  @Input() color: string = '';

}
