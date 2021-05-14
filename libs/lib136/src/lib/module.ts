
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib136-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib136Component implements OnInit {
      constructor() { }
  
      title = 'lib136-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib136Component],
      providers: [],
      exports: [Lib136Component],
  })
  export class Lib136Module { }

