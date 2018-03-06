import { Component, Input } from '@angular/core';

@Component({
    selector: 'cm-header',
    styleUrls: ['./header.component.css'],
    // templateUrl: './header.component.html',
    template: `
        <header>
            <div class="logo left-column">
                <img src="assets/cloudMaker-logo-2.png" width="100px"/>
            </div>
            <div class="header-content">
                <div class="header-company-controls">
                    <i class="fas fa-briefcase"></i>
                    <select>
                        <option *ngFor="let company of companies">{{company}}</option>
                    </select>
                </div>
                <div class="header-user-controls">
                    <i class="fas fa-user-circle user-icon"></i>
                    <span>{{user}}</span>
                    <i class="fas fa-cog"></i>
                    <i class="fas fa-sign-out-alt"></i>
                </div>
            </div>
        </header>
    `
})
export class HeaderComponent {
    @Input() companies: Array<Object>
    @Input() user: String
}
