
  import { NgModule } from '@angular/core';

  import { Component, OnInit } from '@angular/core';
  
  @Component({
      selector: 'lib92-component',
      template: '<h1>{{title}}</h1>'
  })
  export class Lib92Component implements OnInit {
      constructor() { }
  
      title = 'lib92-component';
  
      ngOnInit() { }
  }
  
  @NgModule({
      imports: [],
      declarations: [Lib92Component],
      providers: [],
      exports: [Lib92Component],
  })
  export class Lib92Module { }

