import GrandChild from "./GrandChild";


const Child = (props) => {
    return (  
        <div>
            <h2> Child component</h2>
            <h4> Values from Parent parent name {props.parentName} ,
            parent location - {props.parentLoca} </h4>
            <hr/>
            Values from Child {props.name}
            <GrandChild grandname={props.parentName} grandloca= {props.parentLoca}
             parentname={props.name} name="Sameer"/>
        </div>
    );
}
 
export default Child;


//Prop drilling
