import { Card } from "../atoms/Card";
import  serviceConfig  from '../../services/servicesConfig'
import { PosterImage } from "../atoms/PosterImage";
import { Credit } from "../../interfaces/credit";
import styled from "@emotion/styled";

export const CreditCard = ({ id, profile_path, name, character }: Credit) => {
  return (
    <Card
      customStyle={{
        width: "200px",
      }}
    >
      <PosterImage
        src={`${serviceConfig.apiImagesUrl}${profile_path}`}
        alt={`${id}`}
      />
      <Text>{name}</Text>
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

const Text = styled("p")({
    margin: "0"
})
