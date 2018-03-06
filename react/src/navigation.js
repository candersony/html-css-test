class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 3
        };
    }

    render() {
        return (
            <nav className="left-column">
                <ul className="nav-list">
                    {this.props.links.map((link, i) =>
                        <li className={"nav-item " + (this.state.activeLink === i ? "selected" : "")} key={i}>
                            <i className={"nav-icon " + link.icon}></i>
                            <a href={'#' + link.name.toLowerCase()} className="nav-link">{link.name}</a>
                        </li>
                    )}
                </ul>
            </nav>
        )
    }
}
