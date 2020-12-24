let emailCollector = document.getElementById("emailCollector")
emailCollector.addEventListener("submit", e => {
  e.preventDefault()

  let currentFormData = new FormData(e.target)
  let userName = currentFormData.get("userName")
  let userEmail = currentFormData.get("userEmail")

  let updatedHtml = `
  
  <h2>Thank you, ${userName}!</h2>
      <p>You are Subscribed.</p>
      <p> Communication will be sent to ${userEmail}</p>  
  `

  let updatedMainContent = document.getElementById("mainContent")
  updatedMainContent.innerHTML = updatedHtml
})
