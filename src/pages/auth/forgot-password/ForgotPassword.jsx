import './ForgotPassword.css'
import { Link } from 'react-router-dom';

function ForgotPassword() {
    return (
        <>
            <div class="min-h-screen flex flex-col lg:flex-row">
                {/* Lado da capa (somente visível em telas grandes) */}
                <div class="hidden lg:flex lg:w-2/3 bg-blue-700 text-white items-center justify-center p-8">
                    <div class="text-center">
                        <h1 class="h1 text-zinc-100">noctua</h1>
                        <p class="text-lg text-zinc-100">Acesse a plataforma</p>
                    </div>
                </div>

                {/* Lado do formulário */}
                <div class="flex w-full lg:w-1/3 items-center justify-center p-8">
                    <div class="w-full max-w-sm space-y-6">
                        <h2 class="h2">Esqueceu a senha?</h2>
                        <p class="mb-6">Insira o endereço de e-mail associado à sua conta e lhe enviaremos um link para redefinir sua senha</p>

                        <form class="space-y-4">
                            <div>
                                <label for="email" class="block text-sm font-medium">E-mail</label>
                                <input id="email" type="email" required class="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Enviar link</button>
                            </div>

                            {/* <div>
                                <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Voltar para login</button>
                            </div> */}
                        </form>

                        <div class="flex justify-center">
                            <Link to="/sign-in">
                                <a href="">Voltar para login</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
