import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useTabelaOuForm from "../hooks/useTabelaOuForm";
import Cliente from "../core/Cliente";
import { useEffect, useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = useState<Cliente[]>([]);

  const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm();

  useEffect(() => {
    obterClientesArray();
    obterClientesInstancias();
  }, []);

  const obterClientesArray = () => {
    const clientesLocalStorage = localStorage.getItem("clientes");
    const clientesArray = clientesLocalStorage
      ? JSON.parse(clientesLocalStorage)
      : [];
    return clientesArray;
  };

  const obterClientesInstancias = (): Cliente[] => {
    const clientesLocalStorage = localStorage.getItem("clientes");
    const clientesArray = clientesLocalStorage
      ? JSON.parse(clientesLocalStorage)
      : [];

    const clientesInstancias = clientesArray.map(
      (c: any) => new Cliente(c.nome, c.idade, c.id)
    );
    setClientes(clientesInstancias);
    return clientesInstancias;
  };

  const novoCliente = () => {
    setCliente(Cliente.vazio());
    exibirFormulario();
  };

  const selecionarCliente = (cliente: Cliente) => {
    setCliente(cliente);
    exibirFormulario();
  };

  const salvarCliente = (cliente: Cliente) => {
    const objetoCliente = {
      Id: cliente.id,
      Nome: cliente.nome,
      Idade: cliente.idade,
    };

    const clientesArray = obterClientesArray();
    const clientesInstancias = obterClientesInstancias();

    const indiceArray = clientesArray.findIndex(
      (c: any) => c.id === cliente.id
    );
    const indiceInstancias = clientesInstancias.findIndex(
      (c: Cliente) => c.id === cliente.id
    );

    if (indiceArray === -1 && indiceInstancias === -1) {
      clientesArray.push(objetoCliente);
      clientesInstancias.push(cliente);
    } else {
      clientesArray[indiceArray] = objetoCliente;
      clientesInstancias[indiceInstancias] = cliente;
    }

    localStorage.setItem("clientes", JSON.stringify(clientesArray));
    setClientes(clientesInstancias);
    exibirTabela();
  };

  const excluirCliente = (cliente: Cliente) => {
    const clientesArray = obterClientesArray();
    const clientesInstancias = obterClientesInstancias();

    const indiceArray = clientesArray.findIndex(
      (c: any) => c.id === cliente.id
    );
    const indiceInstancias = clientesInstancias.findIndex(
      (c: Cliente) => c.id === cliente.id
    );

    if (indiceArray === -1 && indiceInstancias === -1) {
      clientesArray.splice(indiceArray, 1);
      clientesInstancias.splice(indiceInstancias, 1);

      localStorage.setItem("clientes", JSON.stringify(clientesArray));
      setClientes(clientesInstancias);
    }
  };

  const cancelarOperacao = () => exibirTabela();

  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}
    >
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao cor="green" className="mb-4" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              selecionarCliente={selecionarCliente}
              excluirCliente={excluirCliente}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            salvarCliente={salvarCliente}
            cancelarOperacao={cancelarOperacao}
          />
        )}
      </Layout>
    </div>
  );
}
