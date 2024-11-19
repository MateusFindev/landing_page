import { useState } from "react";

export function Contact() {
    const [email, setEmail] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {


        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Por favor, insira um e-mail válido.');
            return;
        }

        if (!content) {
            setError('Por favor, insira uma mensagem.');
            return;
        }

        setError('');
        setLoading(true);
        setSuccessMessage('');

        try {
            const response = await fetch('/api/function-4', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2MjEwMzI4Njk3MjI0NzkxMzY2IiwiZW1haWwiOiJtYXRldXNmaW4xMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InVqUk5GdUdRTXRsNFIyYTdfOERRZ1EiLCJuYmYiOjE3MzE5NzQ4MjEsImlhdCI6MTczMTk3NTEyMSwiZXhwIjoxNzMxOTc4NzIxLCJqdGkiOiIyYzhmYjkyNDE3MjY2ZTU5MzFhMmEwZDQ3ODc5NTc5ZTU3ZmVlZDQ1In0.RV4pM3JkTy-HIClH3VhPcn5ul5gFwq_0K-Ike4K8X8dt5wKLP38fKTOXGHR1bljnUdmn-2Z0QLW0TcT-bZyAuy1jBpJyOK83o1YJPDW-YW7BZucreiQUPbutjhGSewH4yNDnw_E4bDqqowsvyGU2SdL8BlGSadYPO5oFXlCwi2zNu1W8ez1pizj_OZ5kMcplA3nHb8DTLZRto48wvAOK7mRKHRSFO9cSAUyqvWDsKAZERZAevGYHKzFDW4vP_llZjZtxlNJYWf637-XrdPoJ_wFP4imG0HJStnisnECzUH3ih7hO7S0TIjRlFIUjJ7034_Ykgsm9oO9A8qm1r1Z1lQ`,
                },
                body: JSON.stringify({ toMail: email, content }),
            });

            if (response.ok) {
                setSuccessMessage('E-mail enviado com sucesso!');
                setEmail('');
                setContent('');
            } else {
                const errorData = await response.json();
                setError(`Erro ao enviar e-mail: ${errorData.message || response.statusText}`);
            }
        } catch (err) {
            console.error('Erro ao enviar e-mail:', err);
            setError('Erro ao enviar e-mail. Tente novamente mais tarde.');
        } finally {
            setLoading(false);
        }
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    return (
        <section id="contact">
            <header>
                <h2>Entre em contato!</h2>
                <span>
                    <span>Entre em contato, estamos dispostos a tirar qualquer dúvida</span>
                    <span className="desktop-only">, seja um orçamento, uma dúvida técnica de algum de nossos produtos. Estamos à disposição para responder</span>
                    <span>😎.</span>
                </span>
            </header>
            <form onSubmit={handleSubmit} className="content-contact">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu e-mail"
                    required
                />
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Digite sua mensagem"
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
                {error && <p className="error">{error}</p>}
                {successMessage && <p className="success">{successMessage}</p>}
            </form>
        </section>
    )
}

