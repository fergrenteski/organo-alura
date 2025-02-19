import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
  const css = { backgroundColor: time.corSecundaria };

  return colaboradores.length > 0 ? (
    <section className="time" style={css}>
      <h3 style={{ borderColor: time.corPrimaria }}>{time.nome}</h3>
      <input value={time.corPrimaria} onChange={(evento) => mudarCor(evento.target.value, time.id)} type="color" className='input-color' name="" id="" />
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={time.corPrimaria}
            key={colaborador.id}
            colaborador={colaborador}
            aoDeletar={aoDeletar}
            aoFavoritar={aoFavoritar}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;