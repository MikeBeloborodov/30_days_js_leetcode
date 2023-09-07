const time_ticker = (seconds) => {
  for (let i = 1; i <= seconds; i++) {
    setTimeout(() => {
      console.log(`Tick ${i}`);
    }, 1000 * i)
  }
}

// time_ticker(5)

const time_ticker_var = (seconds) => {
  for (var i = 1; i <= seconds; i++) {
    const closure = (j) => {
      setTimeout(() => {
        console.log(`Tick ${j}`);
      }, 1000 * j)
    }
    closure(i)
  }
}

time_ticker_var(5)