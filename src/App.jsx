import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const changeLang = (lang) => { i18n.changeLanguage(lang); }

  return (
    <div className="App">
      <h1>{t('welcome')}</h1>
      <button onClick={()=> changeLang("en")}>EN</button>
      <button onClick={()=> changeLang("ru")} >RU</button>
    </div>
  )
}

export default App
