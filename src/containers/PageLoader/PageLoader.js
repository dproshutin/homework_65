import React, {Component} from 'react';
import axios from '../../axios-homework-65';
import Spinner from "../../components/UI/Spinner/Spinner";

class PageLoader extends Component {
    state = {
        data: {},
        loading: true
    };
    _shouldRequest = (prevProps) => {
        return (prevProps.match.params.page !== this.props.match.params.page);
    };
    componentDidUpdate(prevProps) {
        if (this._shouldRequest(prevProps)) {
            this._getContent();
        }
    }
    componentDidMount() {
        this._getContent();
    }
    _getContent = () => {
        const path = this.props.match.params.page || "home";
        axios.get("/" + path + ".json")
            .then(response => {
                const data = response.data;
                this.setState({loading: false, data});
            }).catch(err => {
            this.setState({loading: false});
            throw new Error(err);
        })
    };
    render() {
        if (this.state.loading) {
            return <Spinner/>
        }
        return (
            <div>
                <h3>{this.state.data.title}</h3>
                <p>{this.state.data.content}</p>
            </div>
        );
    }
}

export default PageLoader;