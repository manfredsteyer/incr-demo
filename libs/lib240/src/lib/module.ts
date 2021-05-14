
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib240-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib240Component implements OnInit {
      constructor() { }
  
      title = 'lib240-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib240Component],
      providers: [],
      exports: [Lib240Component],
  })
  export class Lib240Module { }

