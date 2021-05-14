
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib112-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib112Component implements OnInit {
      constructor() { }
  
      title = 'lib112-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib112Component],
      providers: [],
      exports: [Lib112Component],
  })
  export class Lib112Module { }

