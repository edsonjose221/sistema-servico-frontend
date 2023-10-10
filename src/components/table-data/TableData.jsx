const TableData = ({servicos}) => {
  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome</th>
                <th scope="col">Descrição</th>
                <th scope="col">Valor</th>
                <th scope="col">Status</th>
                <th scope="col">Opções</th>
                </tr>
            </thead>
            <tbody>
                {servicos.map((servico) => (
                    <tr key={servico.id}>
                        <td>{servico.id}</td>
                        <td>{servico.name}</td>
                        <td>{servico.description}</td>
                        <td>{servico.valueService}</td>
                        <td>{servico.status}</td>
                        <td></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default TableData;