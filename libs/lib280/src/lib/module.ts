
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib280-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib280Component implements OnInit {
      constructor() { }
  
      title = 'lib280-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib280Component],
      providers: [],
      exports: [Lib280Component],
  })
  export class Lib280Module { }

