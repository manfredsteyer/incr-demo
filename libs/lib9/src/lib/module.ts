
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib9-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib9Component implements OnInit {
      constructor() { }
  
      title = 'lib9-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib9Component],
      providers: [],
      exports: [Lib9Component],
  })
  export class Lib9Module { }

