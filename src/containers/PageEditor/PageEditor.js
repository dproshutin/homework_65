import React, {Component} from 'react';
import axios from '../../axios-homework-65';
import Spinner from "../../components/UI/Spinner/Spinner";
import InputField from "../../components/UI/InputField/InputField";
import TextArea from "../../components/UI/TextArea/TextArea";
import Button from "../../components/UI/Button/Button";
import './PageEditor.css';

class PageEditor extends Component {
    state = {
        sections: ["Choose page to edit..."],
        loading: true,
        category: "Choose page to edit...",
        title: "",
        content: ""
    };

    valueChanged = (e) => {
        const name = e.target.name;
        this.setState({[name]: e.target.value});
    };

    sectionUpdateHandler = (e) => {
        e.preventDefault();
        this.setState({loading: true});
        const update = {
            title: this.state.title,
            content: this.state.content
        };

        axios.put('/' + this.state.category + '.json', update)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/pages/' + this.state.category);
            }).catch(err => {
            this.setState({loading: false});
            throw new Error(err);
        });
    };

    componentDidMount() {
        axios.get('/.json')
            .then(response => {
                const data = response.data;
                if (Object.keys(data).length > 0) {
                    const sections = this.state.sections.concat(Object.keys(data));
                    this.setState({sections, loading: false});
                }
            }).catch(err => {
            this.setState({loading: false});
            throw new Error(err);
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.category.localeCompare(prevState.category) !== 0) {
            axios.get('/' + this.state.category + '.json')
                .then(response => {
                    const data = response.data;
                    const title = data.title;
                    const content = data.content;
                    this.setState({title, content, loading: false});
                }).catch(err => {
                this.setState({loading: false});
                throw new Error(err);
            })
        }
    }

    render() {
        if (this.state.loading) {
            return <Spinner/>
        }
        let elements;

        if (this.state.category.localeCompare("Choose page to edit...") !== 0) {
            elements = (
                <form className="PageEditorForm" onSubmit={this.sectionUpdateHandler}>
                    <h4>Title</h4>
                    <InputField
                        name="title"
                        type="text"
                        title={this.state.title}
                        change={this.valueChanged}
                    />
                    <h4>Content</h4>
                    <TextArea
                        name="content"
                        rows="10"
                        cols="80"
                        message={this.state.content}
                        change={this.valueChanged}
                    />
                    <Button
                        btnType="add"
                        value="Save"
                    />
                </form>
            );
        } else {
            elements = null;
        }
        return (
            <div className="PageEditor">
                <h3>Edit pages</h3>
                <div className="SelectBox">
                    <label>Selected page</label>
                    <select
                        name="category"
                        onChange={this.valueChanged}
                        defaultValue={this.state.sections[0]}
                    >
                        {this.state.sections.map(option => {
                            return <option value={option} key={option}> {option}</option>
                        })}
                    </select>
                </div>
                {elements}
            </div>
        );
    }
}

export default PageEditor;