import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CreateComponent } from "./create/create.component";
import { DetailsComponent } from "./details/details.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./_guards/auth.guard";

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'create', component: CreateComponent},
            {path: 'details', component: DetailsComponent},
            {path: 'details/:id', component: DetailsComponent},
            {path: 'admin', component: AdminComponent},
        ]
    }, 
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
