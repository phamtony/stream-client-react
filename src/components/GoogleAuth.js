import React from "react";

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '167979888573-sreuakatlp4ttspj8j4klsud84e7tu28.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render() {
        return (
            <div>Hello google</div>
        );
    }
}

export default GoogleAuth;