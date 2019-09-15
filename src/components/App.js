import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PostCreate from './posts/PostCreate';
import PostDelete from './posts/PostDelete';
import PostEdit from './posts/PostEdit';
import PostShow from './posts/PostShow';
import PostList from './posts/PostList';
import Header from './Header';
import history from '../history';


const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" exact component={PostList} />
                        <Route path="/posts/new" exact component={PostCreate} />
                        <Route path="/posts/edit/:id" exact component={PostEdit} />
                        <Route path="/posts/delete/:id" exact component={PostDelete} />
                        <Route path="/posts/:id" exact component={PostShow} />
                    </Switch>                    
                </div>
            </Router>
        </div>
    );
};

export default App;