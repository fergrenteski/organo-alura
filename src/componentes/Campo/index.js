import './Campo.css'

const Campo = ({ label, tipo, valor, obrigatorio, aoAlterado, placeholder}) => {

    const placeholderModificada = `${placeholder}...` 

    /**
     * Função que é chamada toda vez que o campo é alterado.
     * @param {Event} evento Evento de alteração do campo.
     */
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className={`campo campo-${tipo}`}>
            <label>
                {label}
            </label>
            <input type={tipo} value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada}/>
        </div>
    )
}

export default Campo