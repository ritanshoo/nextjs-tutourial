import React,{useContext} from 'react'
import Card from 'react-bootstrap/Card';
import { APP_CONTEXT } from '../users/page';

export default function UserAddress(props) {

    const user = useContext(APP_CONTEXT);

    const { address, company } = user
    const {city,zipcode,street,suite} = address;

    const {catchPhrase,bs} = company;

    return (
        <React.Fragment>
            <Card>
                <Card.Body>{`Business: ${catchPhrase}, ${bs} `}</Card.Body>
            </Card>
            <Card>
                <Card.Body>{`Address : ${city},  ${zipcode},  ${street},  ${suite}`}</Card.Body>
            </Card>
        </React.Fragment>
    )
}
