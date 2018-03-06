import {Component} from '@angular/core';

const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];
const names = [
    "Fausto Dittrich",
    "Alethea Mckechnie",
    "Carlos Dewoody",
    "Euna Broady",
    "Dorthea Wiren",
    "Seymour Emily",
    "Augusta Zwart",
    "Mavis Judkins",
    "Carol Parsley",
    "Al Valero"
];
const logonTimes = ['01:12:34', '03:23:56', '12:19:18', '13:38:45', '19:22:39']
const clients = ['Windows 10', 'Windows XP', 'Windows Vista', 'OSX', 'Linux'];
const statuses = ['Active', 'Inactive'];
const servers = ['Rudolf', 'The Little General', 'Cookie Monster'];
const sessionTypes = ['Outlook', 'Web', 'Mobile'];

@Component({
    selector: 'app-root',
    styleUrls: ['./app.component.css'],
    template: `
        <div class="app-container">
            <cm-header [companies]="companies" [user]="user"></cm-header>
            <div class="container">
                <navigation [links]="links"></navigation>
                <session-view [sessions]="sessions"></session-view>
            </div>
        </div>
    `
})
export class AppComponent {
    user = 'Global SuperAdmin';
    companies = ['Company X', 'Company Y'];
    links = [
        {
            name: 'Dashboard',
            icon: 'fas fa-columns'
        },
        {
            name: 'Users',
            icon: 'fas fa-user'
        },
        {
            name: 'Apps',
            icon: 'fab fa-windows'
        },
        {
            name: 'Sessions',
            icon: 'fas fa-share-alt'
        },
        {
            name: 'Groups',
            icon: 'fas fa-users'
        },
        {
            name: 'Documents',
            icon: 'far fa-file-alt'
        }
    ];
    sessions = names.map(name => ({
        name,
        status: getRandomItem(statuses),
        logonTime: getRandomItem(logonTimes),
        client: getRandomItem(clients),
        server: getRandomItem(servers),
        sessionType: getRandomItem(sessionTypes)
    }));
}
