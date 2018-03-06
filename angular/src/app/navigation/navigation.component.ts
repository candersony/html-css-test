import { Component, Input } from '@angular/core';

@Component({
    selector: 'navigation',
    styleUrls: ['./navigation.component.css'],
    template: `
        <nav class="left-column">
            <ul class="nav-list">
                <li *ngFor="let link of links" [ngClass]="{'selected': isSelected(link) }" class="nav-item" >
                    <i class="nav-icon {{link.icon}}"></i>
                    <a class="nav-link">{{link.name}}</a>
                </li>
            </ul>
        </nav>
    `
})
export class NavigationComponent {
    @Input() links: Array<Object>
    isSelected(link) {
        return link.name === 'Sessions'
    }
}
