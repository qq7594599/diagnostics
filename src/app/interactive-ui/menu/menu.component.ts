import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public dataSource = [
    {
      name: 'Dashboard', icon: 'fa-home', children: [
        { name: 'Dashboard 1', routeTo: '/' }
      ]
    },
    {
      name: 'Products', icon: 'fa-home', children: [
        { name: 'Products 1', routeTo: '/products' }
      ]
    }
  ];

}
