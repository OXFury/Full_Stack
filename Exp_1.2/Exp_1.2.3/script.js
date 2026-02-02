const { useState } = React;

function DrawingApp() {
    const [circles, setCircles] = useState([]);
    const [color, setColor] = useState("red");

    function handleClick(e) {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newCircle = {
            cx: x,
            cy: y,
            r: 15,
            fill: color
        };

        setCircles([...circles, newCircle]);
    }

    function undo() {
        setCircles(circles.slice(0, -1));
    }

    return (
        <div>
            <div className="toolbar">
                <input 
                    type="color" 
                    value={color} 
                    onChange={(e) => setColor(e.target.value)} 
                />
                <button onClick={undo}>Undo</button>
            </div>

            <svg onClick={handleClick}>
                {circles.map((c, i) => (
                    <circle 
                        key={i} 
                        cx={c.cx} 
                        cy={c.cy} 
                        r={c.r} 
                        fill={c.fill} 
                    />
                ))}
            </svg>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DrawingApp />);
