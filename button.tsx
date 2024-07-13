import { Button } from "@chakra-ui/react"
import { login } from "../services/login"

interface IBotao{
    clicar: () => {}
    title: string
}

export const Botao = ({clicar, title}: IBotao) =>{
    return(
        <Button onClick={clicar} colorScheme ='teal' size='sm' width = '100%' marginTop= '5px'>
            {title} 
        </Button>
    )
}