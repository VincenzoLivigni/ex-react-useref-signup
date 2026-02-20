import { useState } from "react"

function App() {

  const [nome, setNome] = useState("")
  const [cognome, setCognome] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [specializzazione, setSpecializzazione] = useState("")
  const [esperienza, setEsperienza] = useState("")
  const [descrizione, setDescrizione] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    if (nome === "" ||
      cognome === "" ||
      username === "" ||
      password === "" ||
      specializzazione === "seleziona" ||
      Number(esperienza) <= 0 ||
      descrizione === ""
    ) {
      console.log("Errore nella compilazione del form")
    } else {
      console.log(`Nome: ${nome}`)
      console.log(`Cognome: ${cognome}`)
      console.log(`Username: ${username}`)
      console.log(`Password: ${password}`)
      console.log(`Specializzazione: ${specializzazione}`)
      console.log(`Esperienza: ${esperienza}`)
      console.log(`Descrizione: ${descrizione}`)
    }
  }
  return (
    <>
      <header>
        <h1 className="text-center">Form di registrazione</h1>
      </header>

      <main>
        <div className="container mt-5">
          <form onSubmit={handleSubmit}>
            {/* nome */}
            <section>
              <label>Nome</label>
              <input
                type="text"
                placeholder="Inserisci nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </section>

            {/* cognome */}
            <section>
              <label>Cognome</label>
              <input
                type="text"
                placeholder="Inserisci cognome"
                value={cognome}
                onChange={(e) => setCognome(e.target.value)}
                required
              />
            </section>


            {/* username */}
            <section>
              <label>Username</label>
              <input
                type="text"
                placeholder="Inserisci username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </section>

            {/* password */}
            <section>
              <label>Password</label>
              <input
                type="password"
                placeholder="Inserisci password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </section>

            {/* specializzazione */}
            <section>
              <label>Specializzazione</label>
              <select
                value={specializzazione}
                onChange={(e) => setSpecializzazione(e.target.value)}>

                <option value="seleziona">Seleziona</option>
                <option value="full-stack">Full stack</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
              </select>
            </section>

            {/* esperienza */}
            <section>
              <label>Anni di esperienza</label>
              <input
                type="number"
                placeholder="Inserisci anni di esperienza"
                value={esperienza}
                onChange={(e) => setEsperienza(e.target.value)}
                required
              />
            </section>

            {/* descrizione */}
            <section>
              <label>Descrizione</label>
              <textarea
                placeholder="Inserisci una breve descrizione"
                value={descrizione}
                onChange={(e) => setDescrizione(e.target.value)}
                required
              />
            </section>
          </form>
        </div>
      </main >
    </>
  )
}

export default App
