
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib218-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib218Component implements OnInit {
      constructor() { }
  
      title = 'lib218-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib218Component],
      providers: [],
      exports: [Lib218Component],
  })
  export class Lib218Module { }

