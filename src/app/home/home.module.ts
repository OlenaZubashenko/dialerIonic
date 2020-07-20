import { NgModule/*, Pipe, Directive, Component */} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
// @Pipe/@Directive/@Component 

//import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    /*Pipe,
    Directive,
    Component,*/
    CommonModule,
    FormsModule,
    IonicModule,
    //HomePageRoutingModule
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
