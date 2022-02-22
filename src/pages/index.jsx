import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {

  const clientes = [
    new Cliente('Lucas', 20, '1'),
    new Cliente('Jane', 60, '2'),
    new Cliente('Mari', 18, '3'),
    new Cliente('Paula', 35, '4'),
  ]

  function clienteSelecionado(cliente, Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente, Cliente) {
    
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}></Tabela>
      </Layout>
    </div>
  )
}