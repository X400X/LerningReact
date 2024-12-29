function Button() {
    let count = 0
    const handleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} times`);
        } else {
            console.log(`${name} stop clicking me !`);
        }

    }
    const handleClick2 = (name) => {
        console.log(`${name} stop clicking me `);
    }

    return(
        <>
        <button onClick={() => handleClick("fred")}>Click Me1</button>
        <button onClick={() => handleClick2("fred")}>Click Me</button>
        </>
    );
}

export default Button;