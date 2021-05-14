
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib293-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib293Component implements OnInit {
      constructor() { }
  
      title = 'lib293-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib293Component],
      providers: [],
      exports: [Lib293Component],
  })
  export class Lib293Module { }

