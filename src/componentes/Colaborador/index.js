import './Colaborador.css'
import { IoIosCloseCircle } from "react-icons/io";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar}) => {

    const background = {backgroundColor: corDeFundo}

    return (<div className='colaborador'>
        <IoIosCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador.id)} aria-label="Deletar"/>
        <div className='cabecalho' style={background}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>)
}

export default Colaborador