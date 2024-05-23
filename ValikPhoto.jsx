function ValikPhoto(props){
  const [photo, setName] = React.useState(props.data.photo);
   
    return ( 
        <div>          
            <img src={photo} alt="FotoValik" />            
        </div>);
    }