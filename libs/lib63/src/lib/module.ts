
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib63-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib63Component implements OnInit {
      constructor() { }
  
      title = 'lib63-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib63Component],
      providers: [],
      exports: [Lib63Component],
  })
  export class Lib63Module { }

