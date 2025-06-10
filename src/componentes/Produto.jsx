const Produto = ({ qtd, aumentaQtd, diminuiQtd }) => {
    return (
        <div>
            <h1>Quantos casacos você quer hoje?</h1>
            <div>
                <button onClick={aumentaQtd}>+</button>
                <div>{qtd}</div>
                <button onClick={diminuiQtd}>-</button>
            </div>
        </div>
    )
};

export default Produto;