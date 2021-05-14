
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib238-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib238Component implements OnInit {
      constructor() { }
  
      title = 'lib238-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib238Component],
      providers: [],
      exports: [Lib238Component],
  })
  export class Lib238Module { }

