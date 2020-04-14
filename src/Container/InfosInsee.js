import React, {useEffect} from 'react';
import {connect} from "react-redux";
import fetchAllInseeInfos from "../Actions/InfosActions";

const InfosInseeContainer = (props) => 
{

    useEffect(() => {
        props.fetchAllInseeInfos()
      }, []);

    return (
        <div>
            <h1>Infos Insee</h1>
            
        </div>
    )
} 

const mapDispatchToProps = dispatch => ({
    fetchAllInseeInfos: () =>  dispatch(fetchAllInseeInfos())
  })

const mapStateToProps = (state) => {
    return {
        infos : state.infos
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(InfosInseeContainer);