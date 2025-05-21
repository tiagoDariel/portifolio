
import { useForm, ValidationError } from '@formspree/react';

const Contato = () => {
    const [state, handleSubmit] = useForm("mvgayqqk");

    if (state.succeeded) {
        alert('Mensagem enviada');
    }

    return (
        <section id="contact" className="bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
                    Fale Comigo
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Informações de contato */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700 text-lg">tdariel2@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700 text-lg">(62) 99500-9668</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="text-gray-700 text-lg">Goiânia - GO, Brasil</span>
                        </div>
                    </div>

                    {/* Formulário de contato */}
                    <form onSubmit={handleSubmit}>
                        <input
                            id="name"
                            type="text"
                            name="name"
                        />
                        <ValidationError
                            prefix="Name"
                            field="name"
                            errors={state.errors}
                        />
                        <input
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <textarea
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contato;