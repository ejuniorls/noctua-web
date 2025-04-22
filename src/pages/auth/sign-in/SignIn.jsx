import './SignIn.css';
import { Link } from 'react-router-dom';

function SignIn() {
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
                        <h2 class="h2">Bem vindo ao noctua</h2>
                        <p class="mb-6">Por favor, faça login na sua conta</p>

                        <form class="space-y-4">
                            <div>
                                <label for="email" class="block text-sm font-medium">E-mail ou Usuário</label>
                                <input id="email" type="email" required class="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium">Senha</label>
                                <input id="password" type="password" required class="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div class="flex justify-between">
                                <div class="form-check mb-0 ms-2">
                                    <input class="form-check-input" type="checkbox" id="remember-me" />
                                    <label class="form-check-label" for="remember-me"> Lembrar</label>
                                </div>

                                <Link to="/forgot-password">
                                    <a href="#" class="mb-0">Esqueceu a Senha?</a>
                                </Link>
                            </div>

                            <div>
                                <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Entrar</button>
                            </div>
                        </form>

                        <div class="flex justify-center">
                            <p class="mb-0">Ainda não possui uma conta?
                                <Link to="/sign-up"><a href=""> Cadastre-se</a></Link>
                            </p>
                        </div>

                        <div class="flex items-center justify-center my-6">
                            <div class="border-t border-gray-300 flex-grow"></div>
                            <span class="px-4 text-gray-500 text-sm">ou</span>
                            <div class="border-t border-gray-300 flex-grow"></div>
                        </div>

                        <div className="flex gap-2">
                            <a href="" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Google</a>
                            <a href="" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">Apple</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
