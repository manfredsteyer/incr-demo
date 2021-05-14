
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib82-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib82Component implements OnInit {
      constructor() { }
  
      title = 'lib82-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib82Component],
      providers: [],
      exports: [Lib82Component],
  })
  export class Lib82Module { }

