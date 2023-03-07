import { Button } from "@chakra-ui/react";
import Header from "../../components/Header";
import { Main, SectionLeft, SectionRigth } from "./style";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

const AdDetailPage = () => {
  let { adId } = useParams();
  const [advDetail, setAdvDetail] = useState();

  useEffect(() => {
    api
      .get(`/ad/${adId}`, {})
      .then((res) => {
        setAdvDetail(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <Main>
        <SectionLeft>
          <div className="div-car-geral">
            <div className="div-car">
              <img src={advDetail} alt="" className="img-car" />
            </div>
            <div className="div-info-car">
              <h1>
                Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200{" "}
              </h1>
              <div className="div-info-car-infos">
                <p>2013</p>
                <p className="p-km">0 KM</p>
                <p className="p-price">R$ 00.000,00</p>
              </div>
              <Button
                marginTop={"15px"}
                width={"40%"}
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
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="div-geral-photo-car">
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
            <div className="div-user">
              <img src={advDetail} alt="" className="img-user" />
              <p className="p-name">Samuel Leão</p>
              <p className="p-desc-user">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <Button backgroundColor={"grey.0"} color={"grey.10"}>
                Ver todos anuncios
              </Button>
            </div>
          </div>
        </SectionLeft>
        <SectionRigth>
          <div className="div-comments">
            <h2>Comentários</h2>
            <ul>
              <li>
                <p className="p-name-li">
                  Julia Lima <span> há 3 dias</span>
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
                <p className="p-name-li">
                  Julia Lima <span> há 3 dias</span>
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
                <p className="p-name-li">
                  Julia Lima <span> há 3 dias</span>
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
          <div className="div-user-comments">
            <p>Samuel Leão</p>
            <textarea
              name=""
              id=""
              defaultValue={
                "Carro muito confortável, foi uma ótima experiência de compra..."
              }
            ></textarea>
            <Button
              width={"30%"}
              backgroundColor={"brand.1"}
              color={"grey.10"}
              marginLeft={"5%"}
            >
              Comentar
            </Button>
          </div>
        </SectionRigth>
      </Main>
      <footer>Fazer o component footer</footer>
    </>
  );
};

export default AdDetailPage;
