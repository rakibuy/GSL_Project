import { Component, ElementRef } from '@angular/core';
import { LayoutService } from './service/app.layout.service';
import { AuthService } from './service/auth.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './app.sidebar.component.html'
})
export class AppSidebarComponent {

    constructor(public layoutService: LayoutService, public el: ElementRef,
        public authService:AuthService) { }
        userRole:any = this.authService.HaveAccess();
        ngOnInit() {}

}
