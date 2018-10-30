import React from 'react'
import { Card } from 'semantic-ui-react'

const CharacterCard = (props) => {
    return props.data.map(character => {

    return(
        <Card key={character.id}>
            <Card.Content header={character.name} />
            <Card.Content description={'age: ' + character.age} />
            <Card.Content description={'eye color: ' + character.eye_color} />
            <Card.Content description={'gender: ' + character.gender} />
            <Card.Content description={'hair color: ' + character.hair_color} />
            <Card.Content extra>
            </Card.Content>
        </Card>
    )
    })
}

export default CharacterCard;