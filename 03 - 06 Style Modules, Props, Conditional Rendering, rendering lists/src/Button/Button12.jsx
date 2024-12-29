function Button ()  {
    
        const styles = {
            backgroundColor: "hsl(40, 233, 223)",
            color: "white",
            borderRadius: "5px",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
        }

        return (
        <button style={styles}>Click Me</button>
    );
}
export default Button;