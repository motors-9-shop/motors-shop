import Header from "../../components/Header";
import { Button, color } from "@chakra-ui/react";
import img1 from "./image.png";
import { SectionLeft } from "./style";
import { styleGuide } from "../../styles/styleGuide";
/* import { useEffect } from "react";
import api from "../../services/api"; */

const PageAdsDetail = () => {
  /* useEffect(() => {
    api
      .get(`/ads/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); */

  return (
    <>
      <Header />
      <main>
        <SectionLeft>
          <div className="div-car">
            <img src={img1} alt="" className="img-car" />
          </div>
          <div className="div-info-car">
            <h1>Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 </h1>
            <div className="div-info-car-infos">
              <p>2013</p>
              <p className="p-km">0 KM</p>
              <p className="p-price">R$ 00.000,00</p>
            </div>
            <Button
              marginTop={"15px"}
              width={"40%"}
              marginLeft={"-140px"}
              backgroundColor={"brand.1"}
              color={"grey.10"}
            >
              Comprar
            </Button>
          </div>
          <div className="div-desc">
            <h2>Descrição</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          <div className="div-photo-car">
            <p className="p-photo">Fotos</p>
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div>
            <img src={img1} alt="" />
            <p>Samuel Leão</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Button>Ver todos anuncios</Button>
          </div>
        </SectionLeft>
        <section>
          <div>
            <h2>Comentários</h2>
            <ul>
              <li>
                <p>
                  Julia Lima<span>há 3 dias</span>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li>
                <p>
                  Julia Lima<span>há 3 dias</span>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
              <li>
                <p>
                  Julia Lima<span>há 3 dias</span>
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <p>Samuel Leão</p>
            <input type="text" />
            <Button>Comentar</Button>
          </div>
        </section>
      </main>
      <footer>Fazer o component footer</footer>
    </>
  );
};

export default PageAdsDetail;
