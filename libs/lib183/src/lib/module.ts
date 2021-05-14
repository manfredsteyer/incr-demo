
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib183-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib183Component implements OnInit {
      constructor() { }
  
      title = 'lib183-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib183Component],
      providers: [],
      exports: [Lib183Component],
  })
  export class Lib183Module { }

