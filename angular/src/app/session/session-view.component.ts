import { Component, Input } from '@angular/core';

@Component({
    selector: 'session-view',
    styleUrls: ['./session-view.component.css'],
    template: `
        <main>
            <section class="header">
                <div>
                    <h1>Sessions</h1>
                    <sub>Manage user Citrix sessions</sub>
                </div>
                <div class="search-controls">
                    <select>
                        <option>Server</option>
                    </select>
                    <input type="search" placeholder="Search users..." />
                </div>
            </section>
            <section class="content">
                <session-table [sessions]="sessions"></session-table>
            </section>
            <section>
                <div class="table-pager">
                    <i class="fas fa-angle-left table-pager-button"></i>
                    <i class="fas fa-ellipsis-h"></i>

                    <ul class="table-pager-list">
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li class="selected">5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                    </ul>
                    <i class="fas fa-ellipsis-h"></i>
                    <i class="fas fa-angle-right table-pager-button"></i>
                    <select>
                        <option>100 results</option>
                    </select>
                </div>
            </section>
        </main>
    `
})
export class SessionViewComponent {
    @Input() sessions: Array<Object>
}
