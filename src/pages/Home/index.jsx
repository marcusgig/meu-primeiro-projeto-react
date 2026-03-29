import { useRef } from 'react'
import api from '../../services/api.js'
import { useNavigate } from 'react-router-dom';
import { Title, Container, Form, ContainerInputs, Input, InputLabel } from './styles.js';

import Button from '../../components/button/index.jsx';

import TopBackground from '../../components/background/index.jsx';

function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  const navigate = useNavigate()

  async function registerNewUser() {
    const data = await api.post("/usuarios", {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value),
      email: inputEmail.current.value
    })
    console.log(data)
  }

  return (
    <Container>

      <TopBackground />

      <Form action="">
        <Title>Cadastrar usuarios</Title>
        <ContainerInputs>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome" ref={inputName} />
          </div>
          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade" ref={inputAge} />
          </div>

        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>Email<span> *</span></InputLabel>
          <Input type="email" placeholder="Email" ref={inputEmail} />
        </div>



        <Button type="button" onClick={registerNewUser} theme="primary" >
          Cadastrar Usuario
        </Button>
      </Form>

      <Button type="button" onClick ={() => navigate("/Lista-de-usuarios")} style={{marginTop:"20px"}} >
        Ver Lista de Usuarios
      </Button>

    </Container >

  )
}

export default Home;
