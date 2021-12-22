export default function Button({title, onClick})  {
    return (
        <div className="button">
            <button onClick={onClick}>{title}</button>
        </div>
    );
}