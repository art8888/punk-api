export default function Button({title, onClick})  {
    return (
        <div className="row">
            <div className="column">
                <div className="button">
                    <button onClick={onClick}>{title}</button>
                </div>
            </div>
        </div>
    );
}