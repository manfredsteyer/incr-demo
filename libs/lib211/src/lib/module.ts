
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib211-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib211Component implements OnInit {
      constructor() { }
  
      title = 'lib211-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib211Component],
      providers: [],
      exports: [Lib211Component],
  })
  export class Lib211Module { }

