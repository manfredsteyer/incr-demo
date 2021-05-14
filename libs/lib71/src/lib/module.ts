
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib71-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib71Component implements OnInit {
      constructor() { }
  
      title = 'lib71-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib71Component],
      providers: [],
      exports: [Lib71Component],
  })
  export class Lib71Module { }

