
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib19-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib19Component implements OnInit {
      constructor() { }
  
      title = 'lib19-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib19Component],
      providers: [],
      exports: [Lib19Component],
  })
  export class Lib19Module { }

