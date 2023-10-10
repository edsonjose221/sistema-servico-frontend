import { useEffect, useState } from "react";
import { API } from "../../api/constante";
import TableData from "../table-data/TableData";

const Form = () => {

  const [servico, setServico] = useState({
    name: '',
    dataStart: '',
    dataEnd: '',
    description: '',
    valueService: '',
    valuePaid: '',
    dataPayment: '', 
  });

  const [servicos, setServicos] = useState([]);

  const handleChange = (event) => {
    setServico({
        ...servico, 
        [event.target.name]: event.target.value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    fetch(API, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(servico)
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
  }

  useEffect(() => {
    
    const fetchData = async () => {
        await fetch(API)
            .then((res) => res.json())
            .then((resData) => {
                console.log(resData);
                setServicos(resData)
            })
            .catch((err) => console.log(err))
    }

    fetchData();
  }, [servico]);
  
  return (
    <div className="container">
        <h1>Cadastro de Serviços</h1>
        <form onSubmit={handleSubmit}>
            <div className="col-6">
                <div>
                    <label className="form-label">Nome do Cliente:</label>
                    <input 
                        name="name" 
                        value={servico.name || ""}
                        onChange={handleChange}
                        type="text" 
                        className="form-control"
                    />
                </div>
                <div>
                    <label className="form-label">Data de Início:</label>
                    <input 
                        name="dataStart" 
                        type="date" 
                        className="form-control"
                        value={servico.dataStart}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Data de Término:</label>
                    <input 
                        name="dataEnd" 
                        type="date" 
                        className="form-control"
                        value={servico.dataEnd}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Descrição do Serviço:</label>
                    <input 
                        name="description" 
                        type="text" 
                        className="form-control"
                        value={servico.description}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Valor do Serviço:</label>
                    <input 
                        name="valueService" 
                        type="number" 
                        className="form-control"
                        value={servico.valueService}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Valor Pago:</label>
                    <input 
                        name="valuePaid" 
                        type="number" 
                        className="form-control"
                        value={servico.valuePaid}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="form-label">Data de Pagamento:</label>
                    <input 
                        name="dataPayment" 
                        type="date" 
                        className="form-control"
                        value={servico.dataPayment}
                        onChange={handleChange}
                    />
                </div>
                <br />
                <input className="btn btn-success" type="submit" value="Cadastrar" />
            </div>
        </form>
        <br />
        <hr />
        <TableData servicos={servicos}/>
    </div>
  );
};

export default Form;