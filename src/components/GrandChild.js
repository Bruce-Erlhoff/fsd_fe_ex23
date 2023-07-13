const GrandChild = (props) => {
    return (
        <div>
            <h1> Grand Child</h1>
            <h3> Values from Grand Parent  name -{props.grandname} and  loca {props.grandloca}</h3>
            <h3> Values from  Child name={props.parentname}</h3>
            <h3> Values of  Grand child {props.name}</h3>
        </div>
     );
}
 
export default GrandChild;


//Prop drilling
