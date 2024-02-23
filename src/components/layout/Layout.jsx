import scss from './Layout.module.scss'
import Footer from './footer/Footer';
import Header from './header/Header';


const Layout = () => {
  return (
    <div className={scss.Layout}>
      <div className="container">
        <div className={scss.Content}>
          <Header/>
          <main>main</main>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default Layout