import ComponentB from './ComponentB.jsx';
import {useState, createContext} from 'react';

export const UserContext = createContext();

function ComponentA(){
const [user, setUser] = useState("Konsta");

    return(
        <>
        <div className="box">
            <h1>Component a</h1>
            <h2>{`hello ${user} `}</h2>
            <UserContext.Provider value={user}>
                <ComponentB />

            </UserContext.Provider>
        </div>
        </>
    );

}
export default ComponentA;