import './Colaborador.css'
import { IoIosCloseCircle, IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar}) => {

    const background = {backgroundColor: corDeFundo}

    return (<div className='colaborador'>
        <IoIosCloseCircle size={25} className='deletar' onClick={() => aoDeletar(colaborador.id)} aria-label="Deletar"/>
        <div className='cabecalho' style={background}>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
            <button className='favoritar' onClick={() => aoFavoritar(colaborador.id)}>
                {colaborador.favorito ? < IoIosHeart size={25} color='#ff0000'/> : <IoIosHeartEmpty  size={25}/>}
            </button>
        </div>
    </div>)
}

export default Colaborador