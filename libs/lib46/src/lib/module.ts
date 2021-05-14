
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib46-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib46Component implements OnInit {
      constructor() { }
  
      title = 'lib46-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib46Component],
      providers: [],
      exports: [Lib46Component],
  })
  export class Lib46Module { }

