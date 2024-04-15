import React from "react";
import { Connect, connect } from "react-redux";

const Ndata = (props) => {
    return (
        <>
        dataa
        </>
    )
}

const mapStateToProps = state  => {
    return{
        datalist : state.data.list
    }
}

export default connect() (Ndata)