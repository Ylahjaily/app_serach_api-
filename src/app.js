import React ,{useEffect, Component} from 'react';
import {connect} from "react-redux";
import InfosInseeContainer from "./Container/InfosInsee";
import authenticate from "./Actions/AuthActions";

class App extends Component
{

    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated : true,
        }
        
    };

    
    componentDidMount(){
        this.props.authenticate()
    }
    

    render()
    {

        return (

            <div>
                <h1>App Search</h1>
                {this.state.isAuthenticated && (<InfosInseeContainer/> )}
            </div>
        )

    }
}

const mapDispatchToProps = dispatch => ({
    authenticate: () =>  dispatch(authenticate())
  })

const mapStateToProps = (state) => {
    return {
        user : state.user
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);