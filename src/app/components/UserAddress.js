import React from 'react'
import Card from 'react-bootstrap/Card';

export default function UserAddress(props) {
    const { address, company } = props
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
