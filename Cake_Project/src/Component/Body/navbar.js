import React from 'react';
import Menu from './Menu/Menu';
import Home from './Home';
// import Contact from './Contact';
import Order from './Order';
import ContactForm from './contacts';
import { Route, Switch, Redirect} from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/contacts" exact component={ContactForm} />
                <Route path="/order" exact component={Order} />
                <Redirect form='/' to='/home' />
            </Switch>

        </div>
    );
}

export default Navbar;
