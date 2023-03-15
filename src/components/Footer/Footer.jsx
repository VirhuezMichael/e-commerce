import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtener el año actual

  const SocialIconsContainer = styled.div`
    text-align: center;
  `
  const FooterFooter = styled.footer`
    padding-top: 40px;
    background-color: #f72585;
  `
  const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
  const SocialContainer = styled.div`
    display: flex;
    justify-content: space-around;
    color: #F8F3E6;
  `
  const Icons = styled.a`
    margin: 12px; 
  `
  const Info = styled.p`
  margin-right: 10px;
  `
  return (
    <FooterFooter>
      <FooterContainer>
        <SocialContainer>
          <SocialIconsContainer>
            <h4>Información de contacto</h4>
            <ul className="list-unstyled">
              <li>Dirección: Av. Siempre Viva 123</li>
              <li>Teléfono: (123) 456-7890</li>
              <li>Email: info@lbimpresiones.com</li>
            </ul>
          </SocialIconsContainer>
          <SocialIconsContainer>
            <h4>Redes sociales</h4>
            <div>
              <Icons href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size='2x' color='#303F9F'/></Icons>
              <Icons href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size='2x' color='#303F9F'/></Icons>
              <Icons href="https://twitter.com"><FontAwesomeIcon icon={faTwitter} size='2x' color='#303F9F'/></Icons>
              <Icons href="https://api.whatsapp.com/send?phone=xxxxxxxxxx"><FontAwesomeIcon icon={faWhatsapp} size='2x' color='#303F9F'/></Icons>
              <Icons href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} size='2x' color='#303F9F'/></Icons>
            </div>
          </SocialIconsContainer>
          <SocialIconsContainer>
            <h4>Newsletter</h4>
            <p>Recibe nuestras ofertas y novedades en tu email</p>
            <form className="form-inline">
              <div className="form-group">
                <label htmlFor="newsletter-email" className="sr-only">Email</label>
                <input type="email" className="form-control" id="newsletter-email" placeholder="Ingresa tu email" />
              </div>
              <button type="submit" className="btn btn-primary mt-2">Suscribirse</button>
            </form>
          </SocialIconsContainer>
        </SocialContainer>
        <hr />
        <SocialContainer>
          <div className="col-md-6 col-sm-12">
            <p>&copy; {currentYear} L&B Impresiones. Todos los derechos reservados.</p>
          </div>
          <SocialContainer>
              <Info><a href="#">Política de privacidad</a></Info>
              <Info><a href="#">Términos y condiciones</a></Info>
          </SocialContainer>
        </SocialContainer>
      </FooterContainer>
    </FooterFooter>
  );
};

export default Footer;
