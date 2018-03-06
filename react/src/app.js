class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                <Header companies={this.props.companies} user={this.props.user} />
                <div className="container">
                    <Navigation links={this.props.links}/>
                    <SessionsView sessions={this.props.sessions}/>
                </div>
            </div>
        )
    }
}
