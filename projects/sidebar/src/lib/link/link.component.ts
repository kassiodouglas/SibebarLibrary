import { AfterViewInit, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'side-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit, AfterViewInit  {

  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() sublink: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  subOpen = false

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  click(){
    this.onClick.emit()
  }

  toggleSub(){
    this.subOpen = !this.subOpen;
  }

}
