import { Component, OnInit, Input } from '@angular/core';
import { Case } from '../../serializers/case';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent implements OnInit {

  @Input() case: Case;

  constructor() { }

  ngOnInit(): void {
  }

}
