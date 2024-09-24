
//cotação de moedas do dia
const USD = 4.87
const EUR = 5.32
const GBP = 6.08

//Obtendo os elementos do formulario
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")
const result = document.getElementById("result")

// O evento que quero ficar acompanhando é o input
//mANIPULANDO O INPUT AMOUNT PARA RECEBER SOMENTE NUMEROS
amount.addEventListener("input", () => {
  const hasCharactersRegex =  /\D+/g

  //Atualiza o conteudo do input sem as letras
  amount.value = amount.value.replace(hasCharactersRegex,"")

  //console.log(amount.value)
})

//Captando o evento de submit ( enviar ) do formulario
form.onsubmit = () => {
  event.preventDefault() 
  //console.log(currency.value)
  switch(currency.value){
    case "USD":
      convertCurrency(amount.value, USD, "US$")
      break
    case "EUR":  
      convertCurrency(amount.value, EUR, "€" )
      break 
    case "GBP":  
      convertCurrency(amount.value, GBP, "£" )
      break       
  }
}

function convertCurrency(amount, price, symbol){
  //console.log(amount,price, symbol)
  try{
    //Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

    let total = amount * price

    if (isNaN(total)){
      return alert("Por favor digite o valor correto para converter.")
    }

    result.textContent = `${formatCurrencyBRL(total).replace("R$"," ")} Reais`

    //Aplica a classe que exibe o footer com resultado
    footer.classList.add("show-result")
  }catch(error){
  console.log(error)
  //remove a classe que exibe o footer com resultado
   footer.classList.remove("show-result")
   alert("Não foi possivel converter. Tente novamente mais tarde.") 
  }
}

//Formata a moeda em real brasileiro
function formatCurrencyBRL(value){
  return Number(value).toLocaleString("pt-BR",{
    style: "currency", 
    currency: "BRL",
  })
}