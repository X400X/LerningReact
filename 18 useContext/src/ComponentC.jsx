import ComponentD from './ComponentD.jsx';
import {useContext} from 'react';
import {UserContext} from './ComponentA.jsx';

function ComponentC(){

    const user = useContext(UserContext);
    return(
        <>
        <div className="box">
            <h1>Component c</h1>
            <h2>{`hello again ${user}`}</h2>
            <ComponentD />
        </div>
        </>
    );

}
export default ComponentC;