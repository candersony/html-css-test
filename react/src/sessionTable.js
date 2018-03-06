class SessionsTable extends React.Component {
    constructor(props) {
        super(props);
    }

    headings = ['Name', 'Logon Time', 'Client', 'Status', 'Server', 'Session']

    render () {
        return (
            <table cellSpacing="0">
                <thead>
                <tr>
                    {this.headings.map((heading, i) =>
                        <th key={i} className={i === 0 ? "sorted" : ""}>
                            {heading}
                            <div className="table-header-sort-icons">
                                <i className="fas fa-caret-up"></i>
                                <i className="fas fa-caret-down"></i>
                            </div>
                        </th>
                    )}
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {this.props.sessions.map((session, i) =>
                    <tr key={i}>
                        <td>{session.name}</td>
                        <td>{session.logonTime}</td>
                        <td>{session.client}</td>
                        <td>{session.status}</td>
                        <td>{session.server}</td>
                        <td>{session.session}</td>
                        <td className="actions">
                            <i className="fas fa-minus-circle"></i>
                            <i className="fas fa-ellipsis-h"></i>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }
}
