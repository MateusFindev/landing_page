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
                    'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFkYzBmMTcyZThkNmVmMzgyZDZkM2EyMzFmNmMxOTdkZDY4Y2U1ZWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE2MjEwMzI4Njk3MjI0NzkxMzY2IiwiZW1haWwiOiJtYXRldXNmaW4xMUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6InJKdHFMZjVISkM4azJsdXYwWVRuZnciLCJuYmYiOjE3MzE5NjYwNDYsImlhdCI6MTczMTk2NjM0NiwiZXhwIjoxNzMxOTY5OTQ2LCJqdGkiOiJkYzI0YmM1Yzg3OGMzNGYzYjNhYzQ2MzZlMGQ2OWI3MDU2NTA0ODk3In0.s_HwXDADvuyFHCn_qNSVkiTlykCtE6RBfgcSULlOgiHEncQrSnULMebzg-a-J6tEOIs9TXoTYhQxha88GUn8NhTuZjSVluH-bh2M9ZyzhYGj1oBx4lbRyCXYb4CeB0NRqs-fqRMC-LzegWu9cYWi9W3NjpyudmS7iZ_kjvUh9iM3k0fchQ6WXmW0TGR8sa-nbvoGuh-ZNVYq1nGmAOcUp3Zl1316fLFIF90lk0jIfyALIkN3InQ4OCWFtXEm09MERQZR3-UiqUnOScJkYHRPT3Xc-_q5DG2_-EdDm5pVJMlLfmEPyi2xGRmYMOuyeHEhIrJxrENF_Tbv6lvv0W_P5w`,
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

