import { useState } from "react";
import Produto from "./Produto";

const Produtos = () => {
    const [qtd, setQtd] = useState(0); //dados devem ficar localizados no componente pai
                                        //Para distribuir para os filhos

    function aumentaQtd() {
        setQtd(qtd + 1)
    };

    function diminuiQtd() {
        setQtd(qtd - 1)
    };

    return (
        <>
            <Produto qtd={qtd} aumentaQtd={aumentaQtd} diminuiQtd={diminuiQtd} />
            <div>Total de itens: {qtd}</div>
        </>
    )
}

export default Produtos;