const { useState } = React;

function CharCounter() {
    const maxLength = 100;
    const [text, setText] = useState("");

    return (
        <div className="container">
            <textarea
                placeholder="Type something..."
                maxLength={maxLength}
                value={text}
                onChange={(e) => setText(e.target.value)}
            ></textarea>

            <div className={`counter ${text.length === maxLength ? "limit" : ""}`}>
                Characters: {text.length} / {maxLength}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CharCounter />);
