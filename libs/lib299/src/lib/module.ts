
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib299-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib299Component implements OnInit {
      constructor() { }
  
      title = 'lib299-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib299Component],
      providers: [],
      exports: [Lib299Component],
  })
  export class Lib299Module { }

