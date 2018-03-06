class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header>
                <div className="logo left-column">
                    <img src="../design/cloudMaker-logo-2.png" width="100px"/>
                </div>
                <div className="header-content">
                    <div className="header-company-controls">
                        <i className="fas fa-briefcase"></i>
                        <select>
                            {this.props.companies.map((company, i) =>
                                <option key={i}>{company}</option>
                            )}
                        </select>
                    </div>
                    <div className="header-user-controls">
                        <i className="fas fa-user-circle user-icon"></i>
                        <span>{this.props.user}</span>
                        <i className="fas fa-cog"></i>
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </header>
        )
    }
}
