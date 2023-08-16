class CaixaDaLanchonete {

    constructor(){
        this.cardapio = [
            {codigo: "cafe", descricao: "Café", valor: 3.00},
            {codigo: "chantily", descricao: "Chantily (extra do Café)" , valor: 1.50},
            {codigo: "suco", descricao: "Suco Natural", valor: 6.20},
            {codigo: "sanduiche", descricao: "Sanduíche", valor: 6.50},
            {codigo: "queijo", descricao: "Queijo (extra do Sanduíche)", valor: 2.00},
            {codigo: "salgado", descricao: "Salgado", valor: 7.25},
            {codigo: "combo1", descricao: "1 Suco e 1 Sanduíche", valor: 9.50},
            {codigo: "combo2", descricao: "1 Café e 1 Sanduíche", valor: 7.50}
        ];
        this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
    }

    calcularValorDaCompra(metodoDePagamento, itens) {
        if (!this.formasDePagamento.includes(metodoDePagamento)) {
            return 'Forma de pagamento inválida!';
        }

        if(itens.length==0){
            return "Não há itens no carrinho de compra!";
        }

        let valorTotal = 0;

        for (const itemQuantidade of itens) {
            const [codigo, quantidade] = itemQuantidade.split(',');

            const item = this.cardapio.find(item => item.codigo === codigo);

            if (!item) {
                return 'Item inválido!';
            }

            if(quantidade <= 0){
                return "Quantidade inválida!";
            }

            valorTotal += item.valor * quantidade;
        }

        if (metodoDePagamento === 'dinheiro') {
            valorTotal *= 0.95; // 5% de desconto
        } else if (metodoDePagamento === 'credito') {
            valorTotal *= 1.03; // 3% de acréscimo
        }
        
        const valorFormatado = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
        return valorFormatado;
    }
}

export { CaixaDaLanchonete };