const App = () => {
  const erro = () => {
    throw new Error()
  }

  return (
    <button onClick={() => erro()} className='App' type='button'>
      aaaaaa
    </button>
  )
}

export default App
