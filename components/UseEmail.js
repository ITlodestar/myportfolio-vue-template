import { ref } from 'vue'

const UseEmail = (endpointUrl) => {
  const sumbmitted = ref(false);
  const loading = ref(false);
  const error = ref();

  function sendEmail(data) {
    loading.value = true;
    sumbmitted.value = false;
    error.value = undefined;


    fetch(endpointUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        // Endpoint thinks that it's likely a spam/bot request, you need to change "spam protection mode" to "never" in HeroTofu forms
        if (response.status === 422) {
          throw new Error("Are you robot?");
        }

        if (response.status !== 200) {
          throw new Error(`${response.statusText} (${response.status})`);
        }

        return response.json();
      })
      .then(() => {
        sumbmitted.value = true;
        loading.value = false;
      })
      .catch((err) => {
        error.value = err.toString();
        loading.value = false;
      });

  }

  return {
    sumbmitted,
    loading,
    error,
    sendEmail
  }

}

export default UseEmail;