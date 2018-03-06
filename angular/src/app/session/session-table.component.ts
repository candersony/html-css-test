import { Component, Input } from '@angular/core';

@Component({
    selector: 'session-table',
    styleUrls: ['./session-table.component.css'],
    template: `
        <table cellspacing="0">
            <thead>
            <tr>
                <th *ngFor="let heading of headings">
                    {{heading}}
                    <div class="table-header-sort-icons">
                        <i class="fas fa-caret-up"></i>
                        <i class="fas fa-caret-down"></i>
                    </div>
                </th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr *ngFor="let session of sessions">
                <td>{{session.name}}</td>
                <td>{{session.logonTime}}</td>
                <td>{{session.client}}</td>
                <td>{{session.status}}</td>
                <td>{{session.server}}</td>
                <td>{{session.sessionType}}</td>
                <td class="actions">
                    <i class="fas fa-minus-circle"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </td>
            </tr>
            </tbody>
        </table>
    `
})
export class SessionTableComponent {
    @Input() sessions: Array<Object>
    headings = ['Name', 'Logon Time', 'Client', 'Status', 'Server', 'Session']
}
