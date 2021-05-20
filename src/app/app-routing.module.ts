import { NgModule } from '@angular/core'; //initializes router and starts it listening for browser location changes
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent} //The colon (:) in the path indicates that :id is a placeholder for a specific hero id
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)], //adds the RouterModule to the AppRoutingModule imports array and configures it with the routes
  exports: [RouterModule] //AppRoutingModule exports RouterModule so it will be available throughout the app
})
export class AppRoutingModule { }
