import { Card } from "../atoms/Card";
import  serviceConfig  from '../../services/servicesConfig'
import { PosterImage } from "../atoms/PosterImage";
import { Credit } from "../../interfaces/credit";
import styled from "@emotion/styled";
import noCreditImage from "../../../public/noCreditImage.jpg"

export const CreditCard = ({ id, profile_path, name, character }: Credit) => {
  return (
    <Card
      customStyle={{
        width: "200px",
      }}
    >
      <PosterImage
        src={(profile_path != null) ? `${serviceConfig.apiImagesUrl}${profile_path}` : noCreditImage}
        alt={`${id}`}
      />
      <Text customStyle={{}}>{name}</Text>
      <Text
        customStyle={{
          color: "stone",
        }}
      >
        {character}
      </Text>
    </Card>
  );
};

const Text = styled("p")(({ customStyle }: { customStyle: object }) => ({ 
  margin: "0",
  ...customStyle
}))
