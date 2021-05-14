
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib279-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib279Component implements OnInit {
      constructor() { }
  
      title = 'lib279-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib279Component],
      providers: [],
      exports: [Lib279Component],
  })
  export class Lib279Module { }

