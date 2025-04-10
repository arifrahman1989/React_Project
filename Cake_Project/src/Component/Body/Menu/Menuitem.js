import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle } from 'reactstrap';

const Menuitem = props => {
    // console.log(props);
    return (
        <div>
            <Card style={{ margin: '10px' }}>
                <CardBody style={{cursor:'pointer'}} onClick={props.DishSelect}>
                    <CardImg width='100%' alt={props.dish.name} src={props.dish.image} style={{ opacity: '0.7' }} />
                    <CardImgOverlay>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>
    );
}

export default Menuitem;