import { AutenticacaoProvider } from "./autenticacao";
import { LocalizaCepProvider } from "./localizaCep";
import { FavoritesProvider } from "./favorites";

export const Providers = ({ children }) => {
    return (
        <AutenticacaoProvider>
            <FavoritesProvider>
                <LocalizaCepProvider>
                    {children}
                </LocalizaCepProvider>
            </FavoritesProvider>
        </AutenticacaoProvider>
    )
}