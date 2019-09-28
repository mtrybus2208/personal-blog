import React, { useContext, useState, useEffect } from 'react';
 


// context
export const StateContext = React.createContext({
  menuOpen: false,
  toggleMenu: () => {},
});
 
//provider
export const StateProvider = props => {
  const [menuOpen, setMenu] = useState(false);

  useEffect(() => {

  }, [menuOpen])
 
  const toggleMenu = () => {
    setMenu(menuOpen => !menuOpen);
  }
  return (
    <StateContext.Provider value={{ menuOpen, toggleMenu }}>
      {props.children}
    </StateContext.Provider>
  );
};



















// const GlobalStateProvider = () => {
//   const value = useContext(NumberContext);
//   return <div>The answer is {value}.</div>;
// }






// const supportsDarkMode = () =>
//   window.matchMedia("(prefers-color-scheme: dark)").matches === true


// class ThemeProvider extends React.Component {
//   state = {
//     dark: false,
//   }
//   toggleDark = () => {
//     let dark = !this.state.dark
//     localStorage.setItem("dark", JSON.stringify(dark))
//     this.setState({ dark })
//   }
//   componentDidMount() {
//     // Getting dark mode value from localStorage!
//     const lsDark = JSON.parse(localStorage.getItem("dark"))
//     if (lsDark) {
//       this.setState({ dark: lsDark })
//     } else if (supportsDarkMode()) {
//       this.setState({ dark: true })
//     }
//   }
//   render() {
//     const { children } = this.props
//     const { dark } = this.state
//     return (
//       <ThemeContext.Provider
//         value={{
//           dark,
//           toggleDark: this.toggleDark,
//         }}
//       >
//         {children}
//       </ThemeContext.Provider>
//     )
//   }
// }
// export default ThemeContext
// export { ThemeProvider }