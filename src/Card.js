import './Card.css';

const Card=(props)=> {
    return(
        <div className='carded'>
            
            
            {props.children}
            </div>
          
         )
} 
export default Card;
//{props.children} gives the things that are inside the card component in the form component as a input in this component