import { useEffect, useState } from "react"
import api from "../../services/api"
import Button from "../../components/button/index"
import TopBackground from "../../components/background/index.jsx"
import { useNavigate } from "react-router-dom"
import { Container, ContainerUsers, CardUsers, Title, TrashIcon, AvatarUser } from "./styles.js"

import Trash from "../../assets/trash.svg"


function ListUsers() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get("/usuarios")

            setUsers(data)
        }
        getUsers()


    }, [])

    async function deleteUser(id) {
        await api.delete(`/usuarios/${id}`)
        const updatedUsers = users.filter(user => user.id !== id)
        setUsers(updatedUsers)

    }


    return (
        <Container>
            <TopBackground />
            <Title>Listagem de Usuarios</Title>

            <ContainerUsers>

                {users.map((user) => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://i.pravatar.cc/250/public?username=${user.id}`} alt="Avatar do usuário" />
                        <div >
                            <h3>Nome: {user.name}</h3>
                            <p>Idade: {user.age}</p>
                            <p>Email: {user.email}</p>
                            <hr />
                        </div>
                        <TrashIcon src={Trash} alt="botao-de-lixo" onClick={() => deleteUser(user.id)} />
                    </CardUsers>
                ))}

            </ContainerUsers>

            <Button type="button" onClick={() => navigate("/")}>
                Voltar
            </Button>

        </Container>
    )
}

export default ListUsers;