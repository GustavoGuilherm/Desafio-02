import { Card, Box, Center, Input } from "@chakra-ui/react";
import { login } from "../services/login";
import { Botao } from "./button";


export const CardPrincipal = () => {
    return (
        <Card>
            <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
                <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
                    <Center><h1>Faça o login</h1></Center>
                    <Input placeholder="email" />
                    <Input placeholder="Senha" />
                    <Center>
                        <Botao clicar={login} title='Login' ></Botao>
                    </Center>
                </Box>
            </Box>

        </Card>
    )
}