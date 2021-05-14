
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib44-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib44Component implements OnInit {
      constructor() { }
  
      title = 'lib44-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib44Component],
      providers: [],
      exports: [Lib44Component],
  })
  export class Lib44Module { }

