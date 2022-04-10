import { FajoutComponent } from './fajout/fajout.component';
import { StructureComponent } from './structure/structure.component';
import { GroupesComponent } from './groupes/groupes.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'groupes', component: GroupesComponent },
  { path: 'structure', component: StructureComponent},
  { path: 'Ajout', component: FajoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
