import { AutenticacaoProvider } from "./autenticacao";

export const Providers = ({ children }) => {
    return (
        <AutenticacaoProvider>
            {children}
        </AutenticacaoProvider>
    )
}