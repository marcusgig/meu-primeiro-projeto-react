import { Title, Container, Topbackground, Form, ContainerInputs, Input, Button, InputLabel } from './styles.js';

import UsersImage from "./assets/users.png"

function Home() {


  return (
    <Container>

      <Topbackground>
        <img src={UsersImage} alt="Users" />
      </Topbackground>

      <Form action="">
        <Title>Cadastrar usuarios</Title>
        <ContainerInputs>

          <div>
            <InputLabel>Nome<span> *</span></InputLabel>
            <Input type="text" placeholder="Nome" />
          </div>
          <div>
            <InputLabel>Idade<span> *</span></InputLabel>
            <Input type="number" placeholder="Idade" />
          </div>

        </ContainerInputs>
        <div style={{ width: '100%' }}>
          <InputLabel>Email<span> *</span></InputLabel>
          <Input type="email" placeholder="Email" />
        </div>



        <Button type="submit">Cadastrar Usuario</Button>
      </Form>
    </Container >

  )
}

export default Home;
