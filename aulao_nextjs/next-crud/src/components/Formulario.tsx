import { useState } from "react";
import Cliente from "../core/Cliente";
import Entrada from "./Entrada";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  salvarCliente?: (cliente: Cliente) => void;
  cancelarOperacao?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id && (
        <Entrada somenteLeitura texto="Código" valor={id} className="mb-5" />
      )}
      <Entrada
        texto="Nome"
        valor={nome}
        valorMudou={setNome}
        className="mb-5"
      />
      <Entrada
        texto="Idade"
        tipo="number"
        valor={idade}
        valorMudou={setIdade}
      />
      <div className="flex justify-end mt-7">
        <Botao
          cor="blue"
          className="mr-2"
          onClick={() => props.salvarCliente?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelarOperacao}>Cancelar</Botao>
      </div>
    </div>
  );
}
