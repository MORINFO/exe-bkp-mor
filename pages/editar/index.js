let configs = {}

const errorMax = document.getElementById('errorMax')

async function start() {

    try {
        const buscaConfigs = await axios.get('http://127.0.0.1:3434/consulta-configs')

        const loop = document.getElementById(`loop`)

        if (buscaConfigs.data) {
            configs = buscaConfigs.data
            loop.className = 'loopOff'
        } else {
            alert('Erro ao consultar informações')
            window.close()
        }

        configs.map((diretorio, index) => {

            console.log(diretorio)
            const diretorios = document.getElementById('diretorios')

            let novaDivDiretorio = document.createElement('div')
            let id_novaDivDiretorio = new Date().getTime() + index
            novaDivDiretorio.id = id_novaDivDiretorio
            novaDivDiretorio.className = 'divDiretorio'

            let novoSpanNomeBanco = document.createElement('span')
            novoSpanNomeBanco.textContent = `Banco: ${diretorio.nome_banco} `

            let novoInputDiretorio = document.createElement('input');
            novoInputDiretorio.id = JSON.stringify(diretorio)
            novoInputDiretorio.className = 'diretorio'
            novoInputDiretorio.type = 'text'
            novoInputDiretorio.value = diretorio.diretorio_bkp

            novaDivDiretorio.appendChild(novoSpanNomeBanco)
            novaDivDiretorio.appendChild(novoInputDiretorio)

            diretorios.appendChild(novaDivDiretorio);
        })

    } catch (error) {
        erroMessage('Erro ao consultar informações')
    }
}

start()

async function salvaConfigs() {

    try {

        errorMax.className = 'toastOff'

        event.preventDefault();

        let diretorioInputs = document.getElementsByClassName('diretorio');

        if (diretorioInputs.length < 1) {
            alert("obrigatório preencher um diretório")
            return
        }

        let novos_diretorios = []

        await Promise.all(Array.from(diretorioInputs).map(async diretorio => {
            if (diretorio.value.length < 1) {
                throw new Error('Campos vazios não serão alterados')
            }

            let novo_diretorio = JSON.parse(diretorio.id)

            novos_diretorios.push({
                ...novo_diretorio,
                diretorio_bkp: diretorio.value
            })

        }))

        await axios.post('http://127.0.0.1:3434/edita-configs', novos_diretorios)
            .then(response => {
                alert(response.data)
            })
            .catch(error => {
                erroMessage(error.response.data.error)
            })
    } catch (error) {
        erroMessage(error)
    }
}

function erroMessage(message) {

    errorMax.className = 'toast'

    const messageError = document.getElementById('messageError')
    messageError.innerText = JSON.stringify(message).replaceAll(',', '\n')

    setTimeout(() => {
        errorMax.className = 'toastOff'
    }, 60000);
}