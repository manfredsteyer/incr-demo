
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib120-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib120Component implements OnInit {
      constructor() { }
  
      title = 'lib120-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib120Component],
      providers: [],
      exports: [Lib120Component],
  })
  export class Lib120Module { }

