import React from "react";
import {reduxForm, Field} from "redux-form";

class StreamCreate extends React.Component {
    renderError({touched, error}) {
        if (touched && error) {
            return(
                <div className="ui error message">
                    <div className="header">
                        {error}
                    </div>
                </div>
            );
        }
    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmitForm(formValues) {
        console.log(formValues)
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmitForm)} className="ui form error">
                <Field component={this.renderInput} name="title" label="Enter Title" />
                <Field component={this.renderInput} name="description" label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);