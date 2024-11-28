import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MenudirecteurComponent } from './components/Directeur/menudirecteur/menudirecteur.component';
import { DashboarddirecteurComponent } from './components/Directeur/dashboarddirecteur/dashboarddirecteur.component';
import { ErrorComponent } from './components/error/error.component';
import { MenuadminComponent } from './components/admin/menuadmin/menuadmin.component';
import { DashboardadminComponent } from './components/admin/dashboardadmin/dashboardadmin.component';
import { ListcarsComponent } from './components/admin/listcars/listcars.component';
import { AddcarComponent } from './components/admin/addcar/addcar.component';
import { AccueilComponent } from './components/admin/accueil/accueil.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},

    {path:'directeur', component:MenudirecteurComponent,
        children:[
            {path:'', redirectTo:'dashboard', pathMatch:'full'},
            {path:'dashboard', component:DashboarddirecteurComponent}
        ]
    },
    {path:'admin', component:MenuadminComponent,
        children:[
            {path:'', redirectTo:'accueil', pathMatch:'full'},
            {path:'accueil', component:AccueilComponent},
            {path:'liste', component:ListcarsComponent},
            {path:'add', component:AddcarComponent}
        ]
    },
    {path:'**', component:ErrorComponent}


];
