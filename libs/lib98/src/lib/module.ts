
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib98-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib98Component implements OnInit {
      constructor() { }
  
      title = 'lib98-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib98Component],
      providers: [],
      exports: [Lib98Component],
  })
  export class Lib98Module { }

