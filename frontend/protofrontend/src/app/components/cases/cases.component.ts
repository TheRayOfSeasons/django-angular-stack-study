import { Component, OnInit } from '@angular/core';
import { CasesService } from '../../services/cases.service';


@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  public cases = [];
  public url: string;

  constructor(private service: CasesService) { }

  ngOnInit(): void {
    this.service.getCases().subscribe(data => this.cases = data);
  }

}
