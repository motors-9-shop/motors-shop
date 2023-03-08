import { Button } from "@chakra-ui/react";
import Header from "../../components/Header";
import { Main, SectionLeft, SectionRigth } from "./style";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams } from "react-router-dom";

const AdDetailPage = () => {
  let { adId } = useParams();
  const [adDetail, setAdDetail] = useState();

  useEffect(() => {
    api
      .get(`/ad/${adId}`, {})
      .then((res) => {
        setAdDetail(res.data);
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
              <img src={adDetail} alt="" className="img-car" />
            </div>
            <div className="div-info-car">
              <h1>{adDetail.vehicle.name}</h1>
              <div className="div-info-car-infos">
                <p>{adDetail.vehicle.year}</p>
                <p className="p-km">{adDetail.vehicle.km}</p>
                <p className="p-price">{adDetail.price}</p>
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
              <p>{adDetail.description}</p>
            </div>
          </div>
          <div className="div-geral-photo-car">
            <div className="div-photo-car">
              <p className="p-photo">Fotos</p>
              <ul>
                <li>{adDetail.vehicle.images}</li>
              </ul>
            </div>
            <div className="div-user">
              <img src={adDetail.user.photo} alt="" className="img-user" />
              <p className="p-name">{adDetail.user.name}</p>
              <p className="p-desc-user">{adDetail.user.description}</p>
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
              {adDetail.comments?.map((ad) => (
                <li>
                  <p className="p-name-li">
                    {ad.user.name} <span> há 3 dias</span>
                  </p>
                  <p>{ad.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="div-user-comments">
            <p>{adDetail.user.name}</p>
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
    </>
  );
};

export default AdDetailPage;
