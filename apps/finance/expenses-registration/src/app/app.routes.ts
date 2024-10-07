import { ActivatedRouteSnapshot, ResolveFn, Route } from '@angular/router';

export const titleResolver: ResolveFn<string> = 
    (route: ActivatedRouteSnapshot) => 
        route.routeConfig?.path?.replace('-', ' ') ?? '';

export const appRoutes: Route[] = [
    {path: '', pathMatch: 'full', redirectTo: 'expenses-overview'},
    {path: 'expenses-overview', loadComponent: () => import('./ pages/expenses-overview-page/expenses-overview-page.component'), title: titleResolver},
    {path: 'expenses-approval', loadComponent: () => import('./ pages/expenses-approval-page/expenses-approval-page.component'), title: titleResolver},
];
