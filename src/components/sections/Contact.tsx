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
                    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2MjEwMzI4Njk3MjI0NzkxMzY2IiwiZW1haWwiOiJtYXRldXNmaW4xMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6IjV0ajE1LTVvNV9mbnRsMXFaNEtSV3ciLCJuYmYiOjE3MzE5NjcxOTgsImlhdCI6MTczMTk2NzQ5OCwiZXhwIjoxNzMxOTcxMDk4LCJqdGkiOiIwNjNkMGFmNzA5OTczNmU4MDM3NGUwOWU1NDExNmRlZWVmNjI1YjViIn0.yvN9IyNHEYWoTu9MBHcZbOTmWYO6LF981wxuLY4f2HqynmJK4CbphpneSorHaLEdISgtkCA5DOg75jrT2HYsnX3oIWTjOqvJSrsAG7nR7CaSB72dttviraCnyZX3LZvyz-OxS8c-4wdxyPc0DrdWjl-iljqF-nrT4QRS-Ul956w_L5zhz2aC6CFMAnlh8Qly-Z6q3Dz9BSBG8k4BoyHzM0W3eSsmIv_NrnhKMAWJfFqOfs_uYVIif2IiSM7xLvhj2WOsySTgDGE9JkISr4MLVi7CDt7UkK9IlLWjpZsqGOA7ajV-cHLa0zSIubNdND7mlWtICUJw5JSb228Bk6doeQ`,
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

