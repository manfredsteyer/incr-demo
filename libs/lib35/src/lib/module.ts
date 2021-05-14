
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib35-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib35Component implements OnInit {
      constructor() { }
  
      title = 'lib35-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib35Component],
      providers: [],
      exports: [Lib35Component],
  })
  export class Lib35Module { }

