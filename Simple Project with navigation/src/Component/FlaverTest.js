import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/player.css';


class FlaverTest extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <div className='container' style={{textAlign:'center'}}>
                <form onSubmit={this.handleSubmit} style={{ marginTop: '60px' }}>
                    <h2 className='flever-h2'>Select favorite flavor</h2>
                    <label style={{ marginRight: '20px' }}>
                        <select value={this.state.value} className='flever' onChange={this.handleChange}>
                            <option value="grapefruit">Grapefruit</option>
                            <option value="lime">Lime</option>
                            <option value="coconut">Coconut</option>
                            <option value="mango">Mango</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" className='flever'/>
                    <br/>
                    <br/>
                    <Link to='/' className='btn btn-success'>Back</Link>
                </form>
            </div>


        );

    }
}

export default FlaverTest;