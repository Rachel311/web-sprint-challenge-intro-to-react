// Write your Character component here
import React from 'react'
import styled from 'styled-components'


const CharacterCard = styled.div`
color: #2F2F4F;
padding: 1%;
margin-bottom: 1%;`

const CharacterInfo = styled.p`
color: #2F4F4F;`

export default function Character ({ eachCharacter, films }){
    return(
        <CharacterCard>   
            <h1>Name: {eachCharacter.name}</h1>
            <CharacterInfo>Gender: {eachCharacter.gender}</CharacterInfo>
            <CharacterInfo>Eye Color: {eachCharacter.eye_color}</CharacterInfo>
            <CharacterInfo>Hair Color: {eachCharacter.hair_color}</CharacterInfo>
            {films.map(item =>
                <CharacterInfo>Films: {item}</CharacterInfo>)}
        </CharacterCard>
    )
}


