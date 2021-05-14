
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib188-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib188Component implements OnInit {
      constructor() { }
  
      title = 'lib188-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib188Component],
      providers: [],
      exports: [Lib188Component],
  })
  export class Lib188Module { }

