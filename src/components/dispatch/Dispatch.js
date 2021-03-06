import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../common/Spinner'
import { getDispatchs, createDispatch, deleteDispatch } from '../../store/actions/dispatchActions'
import Table from '../common/Table'
import CreateDispatch from './CreateDispatch'
import '../users/users.scss'

class Dispatchs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dispatchs: this.props.dispatch.dispatchs,
            loading: this.props.dispatch.loading,
            openPopup: false
        }
    }

    componentDidMount() {
        this.props.getDispatchs();
    }
    toggle_modal = () => {
        this.setState({
            openPopup: !this.state.openPopup
        })
    }
    render() {
        const { metaData, actions, collections, loading } = this.props.dispatch;
        let renderer;

        renderer = <Table
            dataset={collections}
            metaData={metaData}
            actions={actions}
            handle_create={this.props.createDispatch}
            handle_delete={this.props.deleteDispatch}
            loading={loading}
            toggle_modal={this.toggle_modal}
        />

        return (
            <div>
                {renderer}

                {
                    this.state.openPopup
                        ? (<CreateDispatch toggle_modal={this.toggle_modal} />)
                        : (null)
                }

            </div>
        )
    }
}

Dispatchs.propTypes = {
    getDispatchs: PropTypes.func.isRequired,
    dispatch: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    dispatch: state.dispatchs
});

export default connect(mapStateToProps, { getDispatchs, createDispatch, deleteDispatch })(Dispatchs)