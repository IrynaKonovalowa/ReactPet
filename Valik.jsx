function Valik(props){
    const [state, setState] = React.useState({name: props.data.name, kind: props.data.kind, hobby: props.data.hobby, character: props.data.character, food: props.data.food, age: props.data.age, photos: props.data.photos});
    
    return ( 
        <div class="Valik">
          <h1>{state.name}</h1>
          <div>
             <p><span>Вид: </span>{state.kind}</p>
             <p><span>Возраст: </span>{state.age}</p>
             <p><span>Увлечения: </span>{state.hobby}</p>
             <p><span>Характер: </span>{state.character}</p>
             <p><span>В еде: </span>{state.food}</p>
             <br></br>
             <p><span>Фотографии: </span>{state.photos}</p>
          </div>
        </div>);
    }