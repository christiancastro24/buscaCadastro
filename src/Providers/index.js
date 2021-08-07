import { AutenticacaoProvider } from "./autenticacao";
import { LocalizaCepProvider } from "./localizaCep";

export const Providers = ({ children }) => {
    return (
        <AutenticacaoProvider>
            <LocalizaCepProvider>
                {children}
            </LocalizaCepProvider>
        </AutenticacaoProvider>
    )
}