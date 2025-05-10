import { useState } from 'react'

// Define os tipos de validação disponíveis e suas regras.
const types = {
    email: {
        // Regex para validar o formato de um email.
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        // Mensagem de erro caso o email seja inválido.
        mensagem: 'Preencha um email válido'
    },
    password: {
        // Regex para validar a senha (mínimo de 6 caracteres).
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        // Mensagem de erro caso a senha seja inválida.
        mensagem: 'A senha deve ter pelo menos 8 caracteres, incluindo letras e números maiusculos e minusculos e um caracter especial.'
    },
    number: {
        // Regex para validar um número (apenas dígitos).
        regex: /^\d+$/,
        // Mensagem de erro caso o número seja inválido.
        mensagem: 'Utilize apenas números'
    },
}

// Hook personalizado para gerenciar formulários.
export const useForm = (type) => {
    // Estado para armazenar o valor do campo do formulário.
    const [value, setValue] = useState('')
    // Estado para armazenar o erro de validação, se houver.
    const [error, setError] = useState(null)

    // Função para validar o valor do campo.
    function validate(value) {
        // Se o tipo for falso, não há validação.
        if (type === false) return true
        // Se o valor estiver vazio, define um erro.
        if (value.length === 0) {
            setError('Preencha um valor')
            return false
        // Se houver um tipo definido e o valor não corresponder ao regex, define o erro específico.
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].mensagem)
            return false
        // Caso contrário, remove o erro.
        } else {
            setError(null)
            return true
        }
    }

    // Função chamada quando o valor do campo muda.
    function onChange({ target }) {
        // Se houver um erro, valida o valor atual.
        if (error) validate(target.value)
        // Atualiza o valor do estado com o novo valor.
        setValue(target.value)
    }

    // Função chamada quando o campo perde o foco (onBlur).
    function onBlur() {
        // Valida o valor atual.
        validate(value)
    }

    // Retorna os valores e funções para serem usados pelo componente.
    return {
        value, // Valor atual do campo.
        setValue, // Função para definir o valor do campo.
        onChange, // Função para lidar com a mudança do valor.
        error, // Erro de validação, se houver.
        validate: () => validate(value), // Função para validar o valor (pode ser chamada externamente).
        onBlur, // Função para lidar com a perda de foco.
    }
}

export default useForm