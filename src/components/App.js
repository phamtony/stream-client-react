import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

const PageOne = () => {
    return <div>Page one</div>;
};

const PageTwo = () => {
    return <div>Page two</div>;
};


const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}/>
                    <Route path="/" exact component={PageOne}/>
                    <Route path="/pagetwo" component={PageTwo}/>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;