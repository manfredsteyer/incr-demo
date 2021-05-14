
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib117-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib117Component implements OnInit {
      constructor() { }
  
      title = 'lib117-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib117Component],
      providers: [],
      exports: [Lib117Component],
  })
  export class Lib117Module { }

