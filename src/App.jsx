import { useRef, useState } from "react"

function App() {

  // const [nome, setNome] = useState("")
  // const [cognome, setCognome] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  // const [specializzazione, setSpecializzazione] = useState("")
  // const [esperienza, setEsperienza] = useState("")
  const [descrizione, setDescrizione] = useState("")

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\,.<>?/`~";

  /* validazione username */
  const usernameValido = username.trim().length >= 6 &&
    [...username.trim()].every((u) => letters.includes(u) || numbers.includes(u))

  /* validazione password */
  const passwordValida = password.trim().length >= 8 &&
    [...password.trim()].some(p => letters.includes(p)) &&
    [...password.trim()].some(p => numbers.includes(p)) &&
    [...password.trim()].some(p => symbols.includes(p))

  /* validazione descrizione */
  const descrizioneValida = descrizione.trim().length >= 100 && descrizione.trim().length <= 1000

  const nomeRef = useRef()
  const cognomeRef = useRef()
  const specializzazioneRef = useRef()
  const esperienzaRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    const nomeValue = nomeRef.current.value
    const cognomeValue = cognomeRef.current.value
    const specializzazioneValue = specializzazioneRef.current.value
    const esperienzaValue = esperienzaRef.current.value

    if (nomeValue === "" ||
      cognomeValue === "" ||
      username === "" ||
      password === "" ||
      specializzazioneValue === "seleziona" ||
      Number(esperienzaValue) <= 0 ||
      descrizione === ""
    ) {
      console.log("Errore nella compilazione del form")
    } else {
      console.log(`Nome: ${nomeValue}`)
      console.log(`Cognome: ${cognomeValue}`)
      console.log(`Username: ${username}`)
      console.log(`Password: ${password}`)
      console.log(`Specializzazione: ${specializzazioneValue}`)
      console.log(`Esperienza: ${esperienzaValue}`)
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
                ref={nomeRef}
                required
              />
            </section>

            {/* cognome */}
            <section>
              <label>Cognome</label>
              <input
                type="text"
                placeholder="Inserisci cognome"
                ref={cognomeRef}
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

              <p style={{ color: usernameValido ? "green" : "red" }}>
                {usernameValido ? "username valido" : "Minimo di 6 caratteri, solo lettere e numeri"}
              </p>
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

              <p style={{ color: passwordValida ? "green" : "red" }}>
                {passwordValida ? "Password valida" : "Minimo di 8 caratteri, inserisci almeno 1 lettera, 1 numero e 1 carattere speciale"}
              </p>
            </section>

            {/* specializzazione */}
            <section>
              <label>Specializzazione</label>
              <select
                ref={specializzazioneRef}>

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
                ref={esperienzaRef}
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

              <p style={{ color: descrizioneValida ? "green" : "red" }}>
                {descrizioneValida ? "Descrizione valida" : "Min 100 - Max 1000 caratteri"}
              </p>
            </section>

            <button onClick={handleSubmit}>Invia form</button>
          </form>
        </div>
      </main >
    </>
  )
}

export default App
