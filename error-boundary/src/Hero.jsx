
function Hero({ name }) {
  if(name === "Joker") throw new Error("Name is joker")

  return (
    <div>{name}</div>
  )
}

export default Hero
