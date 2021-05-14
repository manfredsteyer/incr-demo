
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib37-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib37Component implements OnInit {
      constructor() { }
  
      title = 'lib37-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib37Component],
      providers: [],
      exports: [Lib37Component],
  })
  export class Lib37Module { }

