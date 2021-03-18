import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'acme-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {
  layoutCtrl = new FormControl('boxed');

  constructor() {
  }

  ngOnInit(): void {
  }

}
