
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib158-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib158Component implements OnInit {
      constructor() { }
  
      title = 'lib158-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib158Component],
      providers: [],
      exports: [Lib158Component],
  })
  export class Lib158Module { }

