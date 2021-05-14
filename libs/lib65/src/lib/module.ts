
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib65-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib65Component implements OnInit {
      constructor() { }
  
      title = 'lib65-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib65Component],
      providers: [],
      exports: [Lib65Component],
  })
  export class Lib65Module { }

