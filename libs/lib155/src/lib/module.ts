
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib155-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib155Component implements OnInit {
      constructor() { }
  
      title = 'lib155-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib155Component],
      providers: [],
      exports: [Lib155Component],
  })
  export class Lib155Module { }

