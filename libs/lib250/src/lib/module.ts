
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib250-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib250Component implements OnInit {
      constructor() { }
  
      title = 'lib250-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib250Component],
      providers: [],
      exports: [Lib250Component],
  })
  export class Lib250Module { }

