import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Menu from './Menu';
import Time from './Time';



// const queryClient = new QueryClient();
class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <Menu />
                    {/* <QueryClientProvider client={queryClient}>
                        <Time/>
                    </QueryClientProvider> */}
                    <Outlet />
                </div>
            </>

        );
    }
}

export default Home;