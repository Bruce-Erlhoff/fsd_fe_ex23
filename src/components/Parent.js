import Child from "./Child";


const Parent = (props) => {
    return (
        <div>
            <h1> This is the parent </h1>
            <h3> Values  name: {props.name} and lives in {props.location} </h3>
            <Child parentName={props.name} parentLoca={props.location} name="Ram"/>
        </div>
        );
}
 
export default Parent;


