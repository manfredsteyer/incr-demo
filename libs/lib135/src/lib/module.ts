
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib135-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib135Component implements OnInit {
      constructor() { }
  
      title = 'lib135-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib135Component],
      providers: [],
      exports: [Lib135Component],
  })
  export class Lib135Module { }

