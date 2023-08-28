import ListGroup from "./components/ListGroup";
import Alert from "./components/alert";
import Button from "./components/button";

function app(){
  let items=[
    'New York',
    'San Fracisco',
    'Tokyo',
    'London',
    'Paris '
];
const handleSelectItem=(item:string)=>{
  console.log(item); 
}

  return <div >
   
   <Alert text="Hello World!!"></Alert>
   <Button></Button>
    </div>; 
} 

export default app;