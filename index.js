window.onload = () => {
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
    const sessions = ['Outlook', 'Web', 'Mobile'];

    const sessionsTableBody = document.querySelector('#sessions-table tbody');
    names.forEach(name => sessionsTableBody.innerHTML += `
            <tr>
                <td>${name}</td>
                <td>${getRandomItem(logonTimes)}</td>
                <td>${getRandomItem(clients)}</td>
                <td>${getRandomItem(statuses)}</td>
                <td>${getRandomItem(servers)}</td>
                <td>${getRandomItem(sessions)}</td>
                <td class="actions">
                    <i class="fas fa-minus-circle"></i>
                    <i class="fas fa-ellipsis-h"></i>
                </td>
            </tr>
            `
    );
};
