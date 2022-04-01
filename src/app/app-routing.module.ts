import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IpvDashboardComponent } from './features/insta-profile-viewer/ipv-dashboard/ipv-dashboard.component';
const routes: Routes = [
  {path: '', component: IpvDashboardComponent},
  {path: 'ipv', component: IpvDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
