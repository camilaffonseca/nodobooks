import ptBR from './assets/pt-BR.json'
import enUS from './assets/en-US.json'

const languages = { 'pt-BR': ptBR, 'en-US': enUS }

const currentNavLanguage = navigator.language

const getCurrentAppLang = () => {
  if (languages[currentNavLanguage] !== -1) {
    return languages[currentNavLanguage]
  }
  return languages['en-US']
}

const currentAppLanguage = getCurrentAppLang()

const getText = id => currentAppLanguage[id] || ''

export default getText
