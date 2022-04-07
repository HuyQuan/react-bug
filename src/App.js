import logo from './logo.svg';
import './App.css';
import MenuLeft from './Component/Layout/MenuLeft';
import Header from './Component/Layout/Header';
import Footer from './Component/Layout/Footer';

function App(props) {
  let menu = <MenuLeft />;
    const specUrl = ['/login'];

    // const urlAccount = '/account|/user/product+(/list|/add|/edit/[0-9])';
    // if (specUrl.indexOf(this.props.location.pathname) != -1) {
    //   menu = null;
    // }
    // else if (this.props.location.pathname.match(urlAccount)) {
    //   menu = <MenuAccount />
    // }
    let isLogged = false;
    if (localStorage['auth']) {
      isLogged = true;
    }
  return (
    <>
    <Header isLogged={isLogged} />
<section id="form">
  <div className="container">
    <div className="row">
      {menu}
      {props.children}
    </div>
  </div>
</section>
    <Footer />
</>
  );
}

export default App;
