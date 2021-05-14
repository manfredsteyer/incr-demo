
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib3-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib3Component implements OnInit {
      constructor() { }
  
      title = 'lib3-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib3Component],
      providers: [],
      exports: [Lib3Component],
  })
  export class Lib3Module { }

