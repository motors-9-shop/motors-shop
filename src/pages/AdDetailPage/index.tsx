import { Avatar, Text } from "@chakra-ui/react";
import Header from "../../components/Header";
import { Main, SectionLeft, SectionRigth } from "./style";
import { useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { IAd } from "../../interfaces";
import StyledButton from "../../components/StyledButton";
import UserCard from "../../components/UserCard";
import { UserContext } from "../../contexts/userContext";
import Footer from "../../components/Footer";

const AdDetailPage = () => {
  let { adId } = useParams();
  const [ad, setAd] = useState<IAd | null>(null);
  const { user } = useContext(UserContext)
  const [ commentValue, setCommentValue] = useState("")
  const [ refresh, setRefresh] = useState(true)

  const submitComment = async () => {
    api.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem("@kenzie-motors:token")}`

    const reqData = {
      text: commentValue,
      adId: ad?.id
    }

    setRefresh(!refresh)

    const { data } = await api.post("/comments", reqData)
  }

  useEffect(() => {
    api
      .get(`/ads/${adId}`, {})
      .then((res) => {
        (res);
        setAd(res.data);
      })
      .catch((err) => {
        (err);
      });
  }, [refresh]);

  const navigate = useNavigate()

  if(ad)
  return (
    <>
      <Header />
      <Main>
        <SectionLeft>
          <div className="div-car-geral">
            <div className="div-car">
              <img src={ad.vehicle.bannerUrl} alt="" className="img-car" />
            </div>
            <div className="div-info-car">
              <h1>
                {ad.vehicle.name}
              </h1>
              <div className="div-info-car-infos">
                <p>{ad.vehicle.year}</p>
                <p className="p-km">{ad.vehicle.km} KM</p>
                <p className="p-price">{ad.price}</p>
              </div>
              <StyledButton
                marginTop={"15px"}
                width={"40%"}
                variant="brand"
              >
                Comprar
              </StyledButton>
            </div>
            <div className="div-desc">
              <h2>Descrição</h2>
              <p>
                {ad.description}
              </p>
            </div>
          </div>
          <div className="div-geral-photo-car">
            <div className="div-photo-car">
              <p className="p-photo">Fotos</p>
              <ul>
                {ad.vehicle.images.map((image, index) => <li key={index}><img src={image}/></li>)}
              </ul>
            </div>
            <div className="div-user">
              <Avatar name={ad.user.name} w="104px" h="104px"/>
              <p className="p-name">{ad.user.name}</p>  
              <p className="p-desc-user">
                {ad.user.description}
              </p>
              <StyledButton variant="outline" onClick={() => navigate(`/profile/${ad.user.id}`)}>
                Ver todos anuncios
              </StyledButton>
            </div>
          </div>
        </SectionLeft>
        <SectionRigth>
          <div className="div-comments">
            <h2>Comentários</h2>
            <ul>
              {ad.comments.map(comment => {
                return (
                  <li key={comment.id}>
                    <div className="p-name-li" style={{display: "flex", gap: "2rem"}}>
                      <UserCard username={comment.user.name} /> <Text textStyle="body-2-400" color="grey.2" fontSize="12px">No mesmo dia</Text>
                    </div>
                    <p>
                      {comment.text}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="div-user-comments">
            {user && <UserCard username={user?.name} marginLeft={"5%"}/>}
            <textarea
              name=""
              id=""
              onChange={(e) => setCommentValue(e.target.value)}
              placeholder={
                "Carro muito confortável, foi uma ótima experiência de compra..."
              }
            ></textarea>
            <StyledButton
              width={"30%"}
              variant="brand"
              marginLeft={"5%"}
              isDisabled={!user}
              onClick={() => submitComment()}
            >
              Comentar
            </StyledButton>
          </div>
        </SectionRigth>
      </Main>
      <Footer />
    </>
  );

  return <></>
};

export default AdDetailPage;
