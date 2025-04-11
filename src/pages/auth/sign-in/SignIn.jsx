import './SignIn.css';
import { useTranslation } from 'react-i18next';
import "../../../../i18n";

const SignIn = () => {
    const { t, i18n } = useTranslation("sign_in");

    return (
        <>
            <div class="min-h-screen flex flex-col lg:flex-row">
                {/* Lado da capa (somente visível em telas grandes) */}
                <div class="hidden lg:flex lg:w-2/3 bg-blue-700 text-white items-center justify-center p-8">
                    <div>
                        <button onClick={() => i18n.changeLanguage("en")}><span class="fi fi-us fis"></span></button>
                        <button onClick={() => i18n.changeLanguage("pt")}><span class="fi fi-br fis"></span></button>
                    </div>

                    <div class="text-center">
                        <h1 class="text-4xl font-bold mb-4">Bem-vindo de volta!</h1>
                        <p class="text-lg">Acesse a plataforma e continue de onde parou.</p>
                    </div>
                </div>

                {/* Lado do formulário */}
                <div class="flex w-full lg:w-1/3 items-center justify-center p-8">
                    <div class="w-full max-w-md space-y-6">
                        <h2 class="text-2xl font-bold">{t("welcome")}</h2>
                        <p class="mb-6">{t("welcome_desc")}</p>

                        <form class="space-y-4">
                            <div>
                                <label for="email" class="block text-sm font-medium">{t("label_username")}</label>
                                <input id="email" type="email" required class="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div>
                                <label for="password" class="block text-sm font-medium">{t("label_password")}</label>
                                <input id="password" type="password" required class="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>

                            <div class="flex justify-between">
                                <div class="form-check mb-0 ms-2">
                                    <input class="form-check-input" type="checkbox" id="remember-me" />
                                    <label class="form-check-label" for="remember-me"> {t("form_remember")}</label>
                                </div>

                                <a href="#">
                                    <p class="mb-0">{t("forgot_password")}</p>
                                </a>
                            </div>

                            <div>
                                <button type="submit" class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">{t("btn_signin")}</button>
                            </div>
                        </form>

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
