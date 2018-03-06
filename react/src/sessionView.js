class SessionsView extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <main>
                <section className="header">
                    <div>
                        <h1>Sessions</h1>
                        <sub>Manage user Citrix sessions</sub>
                    </div>
                    <div className="search-controls">
                        <select>
                            <option>Server</option>
                        </select>
                        <input type="search" placeholder="Search users..." />
                    </div>
                </section>
                <section className="content">
                    <SessionsTable sessions={this.props.sessions} />
                </section>
                <section>
                    <div className="table-pager">
                        <i className="fas fa-angle-left table-pager-button"></i>
                        <i className="fas fa-ellipsis-h"></i>

                        <ul className="table-pager-list">
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li className="selected">5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                        </ul>
                        <i className="fas fa-ellipsis-h"></i>
                        <i className="fas fa-angle-right table-pager-button"></i>
                        <select>
                            <option>100 results</option>
                        </select>
                    </div>
                </section>
            </main>
        )
    }
}
