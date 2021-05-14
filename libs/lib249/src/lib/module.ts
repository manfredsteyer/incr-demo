
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib249-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib249Component implements OnInit {
      constructor() { }
  
      title = 'lib249-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib249Component],
      providers: [],
      exports: [Lib249Component],
  })
  export class Lib249Module { }

