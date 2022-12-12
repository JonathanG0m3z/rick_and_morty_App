import Card from './Card';
import styled from 'styled-components'

const Container = styled.div`
width: 95%;
`

export default function Cards(props) {
   const { characters } = props;
   return (
      <Container>
         {characters.map(({name,species,gender,image,id})=>{
               return <Card 
               id={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               onClose={props.onClose}
               />
            })}
      </Container>
         
            
   )
}
