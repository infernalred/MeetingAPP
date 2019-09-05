import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CreateComponent } from "./create/create.component";
import { DetailsComponent } from "./details/details.component";
import { AdminComponent } from "./admin/admin.component";
import { AuthGuard } from "./_guards/auth.guard";
import { EditComponent } from "./edit/edit.component";
import { RoomsComponent } from "./admins/rooms/rooms.component";
import { AttendersComponent } from "./admins/attenders/attenders.component";

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'create', component: CreateComponent},
            {path: 'details/:id', component: DetailsComponent},
            {path: 'edit/:id', component: EditComponent},
            {path: 'admin', component: AdminComponent},
            {path: 'rooms', component: RoomsComponent},
            {path: 'attenders', component: AttendersComponent},
        ]
    }, 
    {path: '**', redirectTo: '', pathMatch: 'full'},
];
