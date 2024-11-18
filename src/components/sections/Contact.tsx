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
            const response = await fetch('/api/function-3', {
                method: 'POST',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2MjEwMzI4Njk3MjI0NzkxMzY2IiwiZW1haWwiOiJtYXRldXNmaW4xMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IkFvLWNIb0dpREVzdENmWEVUbjhJZ1EiLCJuYmYiOjE3MzE5NjE3NzAsImlhdCI6MTczMTk2MjA3MCwiZXhwIjoxNzMxOTY1NjcwLCJqdGkiOiJkYzFmNTI0OGFkNGU3MzA0MTFhODJjNjM3NzY2Njc4NTg5MThlOGFiIn0.1S3-LAT3tc455UBdyQY1Pbe53B605If8IJXb4ioqmHNqn8WxtnEkL-i8aR957Q0YBriUEj3Hw0RDtzMYCEjtNq3N_DyVNfBnLuzTO7SoZ1EJVh20haVLKl1oyBVuFQqfgXJkakmBJ5uLxuzOIk-qXC2IrIU-GdN-eVyk4nuIo61bUEXoarClyK08B9qUJbO9cgC0EuOxqFO_j72GV9oIFugRFjaXE6Mdso9KQFWJLe3bjtSi8XHc2WVZM3cCZlzq0vPO-v1Fl2bLHNiDI5puIwMCgN04ya_xG1AkzyQermpbtV4VjxrgqDRKtlL0E_zPiio6nsRApmE-9sWM8Zln2w`,
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
                <h2>Entre em contato</h2>
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

