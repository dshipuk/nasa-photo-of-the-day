import React from 'react';
import styled from 'styled-components';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Image = styled.img`
    max-width: 50%;
    padding: 8px
`
const Exp = styled.p`
    max-width: 50%;
`

const NasaPhoto  = (props) => {
    return (
        <Style className='nasa-photo-wrapper'>
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
                <Image src={props.photo.hdurl} />
            <Exp className='explanation'>{props.photo.explanation}</Exp>

        </Style>
    )
}

export default NasaPhoto;