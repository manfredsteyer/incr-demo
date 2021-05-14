
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib219-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib219Component implements OnInit {
      constructor() { }
  
      title = 'lib219-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib219Component],
      providers: [],
      exports: [Lib219Component],
  })
  export class Lib219Module { }

