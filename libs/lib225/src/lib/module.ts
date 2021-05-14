
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib225-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib225Component implements OnInit {
      constructor() { }
  
      title = 'lib225-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib225Component],
      providers: [],
      exports: [Lib225Component],
  })
  export class Lib225Module { }

