import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");

  // 1. Named Function Handler untuk mendeteksi ketikan email kasir
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TypeScript sah membaca .target.value karena tipe data input sudah dikunci
    setEmail(event.target.value);
  };

  // 3. Named Function Handler untuk menangani pengiriman formulir login
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Mencegah browser refresh halaman total agar status aplikasi SPA tidak hilang
    event.preventDefault();

    // Simulasi mengirim data email kasir yang bersih ke console log
    console.log(`Mengirim data login untuk email: ${email}`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Masuk Sistem POS</h2>

      <div>
        <label htmlFor="email">Email Kasir</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={handleInputChange}
          placeholder="kasir@kafe.com"
          required
        />
      </div>

      <div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            setEmail("");
          }}
        >
          Reset
        </button>

        <button type="submit">Masuk</button>
      </div>
    </form>
  );
};

export default LoginPage;
